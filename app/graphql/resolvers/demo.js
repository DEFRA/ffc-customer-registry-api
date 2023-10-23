import { readFile } from 'node:fs/promises'

const demoResolvers = {
  Query: {
    async demo () {
      const { dependencies } = JSON.parse(
        await readFile(
          new URL('../../../package.json', import.meta.url),
          'utf-8'
        )
      )

      return {
        nodeVersion: process.version,
        graphqlVersion: dependencies.graphql,
        hapiVersion: dependencies['@hapi/hapi']
      }
    }
  }
}

export default demoResolvers
