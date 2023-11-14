import axios from 'axios'
import { URL } from 'url'
import qs from 'qs'
import { wrapper } from 'axios-cookiejar-support'
import { CookieJar } from 'tough-cookie'
import Cache from 'cache'

const cache = new Cache(process.env.CACHE_EXPIRY || 60000)

class RuralPaymentsPortal {
  credentials = {
    email: process.env.RURAL_PAYMENTS_PORTAL_EMAIL,
    password: process.env.RURAL_PAYMENTS_PORTAL_PASSWORD
  }

  jar = null
  client = null
  defaultHeaders = {
    'Accept-Encoding': 'gzip, deflate, br',
    Host: new URL(process.env.RURAL_PAYMENTS_API_URL).hostname,
    Origin: process.env.RURAL_PAYMENTS_API_URL.replace(/^./, ''),
    Referer: `${process.env.RURAL_PAYMENTS_API_URL}login`,
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    Accept: '*/*',
    Connection: 'keep-alive'
  }

  constructor () {
    this.jar = new CookieJar()

    let proxy
    if (process.env.RURAL_PAYMENTS_PROXY_URL) {
      const url = new URL(process.env.RURAL_PAYMENTS_PROXY_URL)
      proxy = {
        protocol: url.protocol,
        host: url.hostname,
        port: url.port
      }
    }

    this.client = wrapper(axios.create({
      jar: this.jar,
      baseURL: process.env.RURAL_PAYMENTS_API_URL,
      headers: this.defaultHeaders,
      proxy
    }))

    this.client.defaults.maxRedirects = 0
    this.client.interceptors.response.use(
      function (config) {
        console.log(`#axios-request: ${config.method}:${config.baseURL}${config.url}`, config.headers, config.data)
        return config
      },
      (error) => {
        console.error(`#axios-request: ${error}`)
        if (error.response && [301, 302, 303].includes(error.response.status)) {
          const redirectUrl = error.response.headers.location
          const cookiesAsString = this.jar.toJSON().cookies.map(c => `${c.key}=${c.value}`).join('; ')
          return this.client.request({
            url: redirectUrl,
            headers: {
              cookie: cookiesAsString
            }
          })
        }
        return Promise.reject(error)
      }
    )
  }

  async getCSRFToken () {
    const csrfResponse = await this.client.get('login')
    return csrfResponse.data.match(/(?<=name="csrfToken" value=")(.*)(?="\\>)/g).pop()
  }

  getCookie (name) {
    try {
      const cookies = this.jar.toJSON()
      const foundCookie = cookies.cookies.find(cookie => cookie.key === name)

      return foundCookie?.value
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async configureAuthenticatedSession () {
    let validSession = await this.hasValidSession()

    if (!validSession) {
      const data = qs.stringify({
        email: this.credentials.email,
        password: this.credentials.password,
        csrfToken: await this.getCSRFToken()
      })

      const authenticateResponse = await this.client.post('login', data)

      const expireSession = authenticateResponse.data.match(/Session exists/g)
      if (expireSession) {
        const currentTimestamp = Date.now()
        await this.client.get(`expire_user_session/${encodeURIComponent(this.credentials.email)}?_${currentTimestamp}`)

        return this.configureAuthenticatedSession()
      }

      validSession = await this.hasValidSession()
      if (!validSession) {
        throw new Error('Unable to get valid session')
      }
    }
  }

  async hasValidSession () {
    try {
      await this.client.request({
        url: 'api/person/context',
        method: 'GET',
        headers: {
          'X-XSRF-TOKEN': this.getCookie('XSRF-TOKEN')
        }
      })
      return true
    } catch (error) {
      return false
    }
  }

  async getCustomerByCRN (crn) {
    const cached = cache.get(`/api/person/${crn}`)
    if (cached) {
      return cached
    }

    await this.configureAuthenticatedSession()

    const customerResponse = await this.client.request({
      url: `/api/person/${crn}`,
      method: 'GET',
      headers: {
        'X-XSRF-TOKEN': this.getCookie('XSRF-TOKEN')
      }
    })

    return customerResponse.data._data
  }
}

export default RuralPaymentsPortal
