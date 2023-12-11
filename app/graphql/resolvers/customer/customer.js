import {
  transformPersonRolesToCustomerAuthorisedBusinessesRoles,
  transformPersonPrivilegesToCustomerAuthorisedBusinessesPrivileges,
  transformPersonSummaryToCustomerAuthorisedBusinesses,
  transformOrganisationCSApplicationToBusinessApplications
} from '../../../transformers/rural-payments-portal'

export const Customer = {
  async businesses ({ id }, __, { dataSources }) {
    const summary = await dataSources.ruralPaymentsPortalApi.getPersonSummaryByPersonId(id)
    return transformPersonSummaryToCustomerAuthorisedBusinesses(id, summary)
  }
}

export const Business = {
  async roles ({ id, customerId }, __, { dataSources }) {
    const authorisation = await dataSources.ruralPaymentsPortalApi.getAuthorisationByOrganisationId(id)
    return transformPersonRolesToCustomerAuthorisedBusinessesRoles(customerId, authorisation.personRoles)
  },

  async privileges ({ id, customerId }, __, { dataSources }) {
    const authorisation = await dataSources.ruralPaymentsPortalApi.getAuthorisationByOrganisationId(id)
    return transformPersonPrivilegesToCustomerAuthorisedBusinessesPrivileges(customerId, authorisation.personPrivileges)
  },

  async applications ({ id }, _, { dataSources }) {
    const response = await dataSources.ruralPaymentsPortalApi.getApplicationsCountrysideStewardshipBySbi(id)

    return transformOrganisationCSApplicationToBusinessApplications(response.applications)
  }
}
