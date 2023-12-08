export function transformCapdPersonSummaryToAuthorisedBusinesses (summary) {
  return summary.map((business) => ({
    id: business.id,
    name: business.name,
    sbi: business.sbi
  }))
}
