export function transformOrganisationApplicationToBusinessApplications (applications) {
  if (!applications) {
    return applications
  }

  const result = []
  for (const response in applications) {
    result.push({
      applicationStatus: {
        id: response.application_id,
        open: response.application_code,
        status: response.status,
        type: response.application_type_de,
        sector: response.workflow_context_sub_code,
        year: response.year,
        FRN: response.has_hefer_intersection_y,
        office: null
      },
      csClaims: {
        schemaYear: response.year,
        type: response.application_type_ds,
        status: response.status_sub_code,
        lastMovement: response.application_movement_date
      }
    })
  }

  return { applications: result }
}
