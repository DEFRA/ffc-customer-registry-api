export function transformOrganisationApplicationToBusinessApplications (applications) {
  if (!applications) {
    return applications
  }

  const result = []
  for (const response in applications) {
    result.push({
      applicationId: response.application_id,
      year: response.year,
      sectorDescription: response.sector_description,
      moduleId: response.module_id,
      modcod: response,
      applicationTypeDS: response.application_type_ds,
      applicationTypeDE: response.application_type_de,
      statusCode: response.status_code,
      statusSubCode: response.status_sub_code,
      statusDescription: response.status_description,
      activeApplicationFlag: response.active_application_flag,
      applicationMovementDate: response.application_movement_date,
      applicationCode: response.application_code,
      workflowContextSubCode: response.workflow_context_sub_code,
      needsIntervention: response.needs_intervention,
      showAccept: response.show_accept,
      submitDate: response.submit_date,
      status: response.status,
      commonLandsFlag: response.common_lands_flag,
      printsCount: response.prints_count,
      queued: response.queued,
      hasSSSIIntersectionC: response.has_sssi_intersection_c,
      hasSSSIIntersectionY: response.has_sssi_intersection_y,
      hasHeferIntersectionY: response.has_hefer_intersection_y,
      hasBeenAGRLIV: response.has_been_AGRLIV,
      terClosingDate: response.ter_closing_date,
      eligibIntersections: response.eligibIntersections,
      requiredSSSIApproval: response.required_sssi_approval
    })
  }

  return { applications: result }
}
