export function mapping () {
  return [
    {
      name: 'Business details',
      showToFirmOfAgents: !0,
      defaultPermission: '',
      permissions: [
        {
          permissionId: 'View - business',
          permissionLabel: 'View',
          functions: [
            { functionLabel: 'View business details' },
            {
              functionLabel: 'View people associated with the business'
            }
          ]
        },
        {
          permissionId: 'Amend - business',
          permissionLabel: 'Amend',
          functions: [
            {
              functionLabel: 'All permissions in View Business Details'
            },
            { functionLabel: 'Amend business contact details' }
          ]
        },
        {
          permissionId: 'Make legal changes - business',
          permissionLabel: 'Make legal changes',
          functions: [
            {
              functionLabel:
                      'All permissions in Amend Business Details'
            },
            {
              functionLabel:
                      'Amend controlled information, such as business name'
            }
          ]
        },
        {
          permissionId: 'Full permission - business',
          permissionLabel: 'Full permissions',
          functions: [
            {
              functionLabel:
                      'All permissions in Make Legal Changes Business Details'
            },
            { functionLabel: 'Add someone to the business' },
            { functionLabel: 'Give permissions on business' }
          ]
        }
      ]
    },
    {
      name: 'Business details',
      showToFirmOfAgents: !1,
      defaultPermission: '',
      permissions: [
        {
          permissionId: 'View - business',
          permissionLabel: 'View',
          functions: [
            { functionLabel: 'View business details' },
            {
              functionLabel: 'View people associated with the business'
            }
          ]
        },
        {
          permissionId: 'Amend - business',
          permissionLabel: 'Amend',
          functions: [
            {
              functionLabel: 'All permissions in View Business Details'
            },
            {
              functionLabel:
                      'Amend business and correspondence contact details'
            }
          ]
        },
        {
          permissionId: 'Make legal changes - business',
          permissionLabel: 'Make legal changes',
          functions: [
            {
              functionLabel:
                      'All permissions in Amend Business Details'
            },
            {
              functionLabel:
                      'Amend controlled information, such as business name'
            },
            { functionLabel: 'Confirm business details' },
            { functionLabel: 'Amend bank account details' },
            { functionLabel: 'Make young/new farmer declaration' }
          ]
        },
        {
          permissionId: 'Full permission - business',
          permissionLabel: 'Full permissions',
          functions: [
            {
              functionLabel:
                      'All permissions in Make Legal Changes Business Details'
            },
            { functionLabel: 'Add someone to the business' },
            { functionLabel: 'Give permissions on business' }
          ]
        }
      ]
    },
    {
      name: 'Land details',
      showToFirmOfAgents: !1,
      defaultPermission: 'No access - land',
      permissions: [
        {
          permissionId: 'No access - land',
          permissionLabel: 'No access',
          functions: []
        },
        {
          permissionId: 'View - land',
          permissionLabel: 'View',
          functions: [
            { functionLabel: 'View land, features and covers' }
          ]
        },
        {
          permissionId: 'Amend - land',
          permissionLabel: 'Amend',
          functions: [
            { functionLabel: 'View land, features and covers' },
            { functionLabel: 'Amend land, features and covers' },
            { functionLabel: 'Transfer land' }
          ]
        }
      ]
    },
    {
      name: 'Entitlements',
      showToFirmOfAgents: !1,
      defaultPermission: 'No access - entitlement',
      permissions: [
        {
          permissionId: 'No access - entitlement',
          permissionLabel: 'No access',
          functions: []
        },
        {
          permissionId: 'View - entitlement',
          permissionLabel: 'View',
          functions: [{ functionLabel: 'View entitlements' }]
        },
        {
          permissionId: 'Amend - entitlement',
          permissionLabel: 'Amend',
          functions: [
            { functionLabel: 'View entitlements' },
            { functionLabel: 'Transfer entitlements' },
            { functionLabel: 'Apply for new entitlements' }
          ]
        }
      ]
    },
    {
      name: 'Basic payment scheme (BPS)',
      showToFirmOfAgents: !1,
      defaultPermission: 'No access - bps',
      permissions: [
        {
          permissionId: 'No access - bps',
          permissionLabel: 'No access',
          functions: []
        },
        {
          permissionId: 'View - bps',
          permissionLabel: 'View',
          functions: [
            { functionLabel: 'View business summary' },
            { functionLabel: 'View claims' },
            { functionLabel: 'View land, features and covers' }
          ]
        },
        {
          permissionId: 'Amend - bps',
          permissionLabel: 'Amend',
          functions: [
            { functionLabel: 'All permissions in View BPS' },
            { functionLabel: 'Create and edit a claim' },
            { functionLabel: 'Amend a previously submitted claim' },
            { functionLabel: 'Amend land, features and covers' }
          ]
        },
        {
          permissionId: 'Submit - bps',
          permissionLabel: 'Submit',
          functions: [
            { functionLabel: 'All permissions in Amend BPS' },
            { functionLabel: 'Submit a claim' },
            { functionLabel: 'Withdraw a claim' },
            { functionLabel: 'Receive warnings and notifications' }
          ]
        }
      ]
    },
    {
      name: 'Countryside Stewardship (Applications)',
      showToFirmOfAgents: !1,
      isCsPermissionGroup: !0,
      defaultPermission: 'No access - cs app',
      permissions: [
        {
          permissionId: 'No access - cs app',
          permissionLabel: 'No Access',
          functions: [{ functionLabel: 'No Access' }]
        },
        {
          permissionId: 'View - cs app',
          permissionLabel: 'View',
          functions: [
            { functionLabel: 'View CS Scheme eligibility' },
            { functionLabel: 'View Applications' },
            { functionLabel: 'View land, features and covers' },
            { functionLabel: 'View CS agreement offer' }
          ]
        },
        {
          permissionId: 'Amend - cs app',
          permissionLabel: 'Amend',
          functions: [
            {
              functionLabel: 'All permissions in View CS Applications'
            },
            { functionLabel: 'View draft CS Agreements' },
            { functionLabel: 'Create and edit a CS application' },
            {
              functionLabel:
                      'Amend a previously submitted CS application'
            },
            { functionLabel: 'Amend Land, Features and Covers' }
          ]
        },
        {
          permissionId: 'Submit - cs app',
          permissionLabel: 'Submit',
          functions: [
            {
              functionLabel: 'All permissions in Amend CS permissions'
            },
            { functionLabel: 'Submit CS Application' },
            { functionLabel: 'Withdraw CS application' },
            { functionLabel: 'Receive warnings and notifications' }
          ]
        }
      ]
    },
    {
      name: 'Countryside Stewardship (Agreements)',
      showToFirmOfAgents: !1,
      isCsPermissionGroup: !0,
      defaultPermission: 'No access - cs agree',
      permissions: [
        {
          permissionId: 'No access - cs agree',
          permissionLabel: 'No Access',
          functions: [{ functionLabel: 'No Access' }]
        },
        {
          permissionId: 'View - cs agree',
          permissionLabel: 'View',
          functions: [
            { functionLabel: 'View CS Agreements' },
            { functionLabel: 'View Land, Features and Cover' },
            { functionLabel: 'View CS Agreement amendments' },
            { functionLabel: 'View CS agreement Transfers' },
            { functionLabel: 'View CS Claims' }
          ]
        },
        {
          permissionId: 'Amend - cs agree',
          permissionLabel: 'Amend',
          functions: [
            { functionLabel: 'All permissions in View CS Agreements' },
            { functionLabel: 'Amend land, Features and Covers' },
            { functionLabel: 'Create and edit a CS claim' },
            { functionLabel: 'Amend a previously submitted claim' },
            {
              functionLabel: 'Create and edit a CS agreement Amendment'
            },
            {
              functionLabel:
                      'Revise a previously submitted agreement amendment'
            },
            {
              functionLabel: 'Create and Edit a CS agreement transfer'
            },
            {
              functionLabel:
                      'Revise a previously submitted agreement transfer'
            }
          ]
        },
        {
          permissionId: 'Submit - cs agree',
          permissionLabel: 'Submit',
          functions: [
            { functionLabel: 'All permissions in Amend CS agreements' },
            {
              functionLabel: 'Submit Acceptance of CS Agreement offer'
            },
            { functionLabel: 'Submit rejection of CS agreement offer' },
            { functionLabel: 'Submit (and resubmit) a CS claim' },
            { functionLabel: 'Withdraw a CS claim' },
            {
              functionLabel:
                      'Submit (and resubmit) a CS agreement amendment'
            },
            { functionLabel: 'Withdraw a CS agreement amendment' },
            {
              functionLabel:
                      'Submit (and resubmit) a CS agreement transfer'
            },
            { functionLabel: 'Withdraw a CS agreement transfer' },
            { functionLabel: 'Receive warnings and notifications' }
          ]
        }
      ]
    },
    {
      name: 'Environmental Land Management (Applications)',
      showToFirmOfAgents: !1,
      isELMPermissionGroup: !0,
      defaultPermission: 'ELM_APPLICATION_NO_ACCESS',
      permissions: [
        {
          permissionId: 'ELM_APPLICATION_NO_ACCESS',
          permissionLabel: 'No Access',
          functions: [{ functionLabel: 'No Access' }]
        },
        {
          permissionId: 'ELM_APPLICATION_VIEW',
          permissionLabel: 'View',
          functions: [
            {
              functionLabel:
                      'View Environmental Land Management scheme eligibility'
            },
            {
              functionLabel:
                      'View Environmental Land Management applications'
            },
            { functionLabel: 'View land, features and covers' },
            {
              functionLabel:
                      'View Environmental Land Management agreement offer'
            }
          ]
        },
        {
          permissionId: 'ELM_APPLICATION_AMEND',
          permissionLabel: 'Amend',
          functions: [
            {
              functionLabel:
                      'All permissions in View Environmental Land Management'
            },
            {
              functionLabel:
                      'View Environmental Land Management agreements'
            },
            {
              functionLabel:
                      'Create and edit a Environmental Land Management application'
            },
            {
              functionLabel:
                      'Amend (but not resubmit) a previously submitted Environmental Land Management application'
            },
            { functionLabel: 'Amend land, features and covers' }
          ]
        },
        {
          permissionId: 'ELM_APPLICATION_SUBMIT',
          permissionLabel: 'Submit',
          functions: [
            {
              functionLabel:
                      'All permissions in Amend Environmental Land Management'
            },
            {
              functionLabel:
                      'Submit Environmental Land Management application'
            },
            {
              functionLabel:
                      'Withdraw Environmental Land Management application'
            },
            {
              functionLabel:
                      'Submit acceptance of Environmental Land Management agreement offer'
            },
            {
              functionLabel:
                      'Submit rejection of Environmental Land Management agreement offer'
            },
            {
              functionLabel:
                      'Receive all application correspondence including all warnings and notifications'
            }
          ]
        }
      ]
    }
  ]
}

// export function roles(role) {
//   switch (role) {
//     case "Owner or Sole Trader":
//       return 0;
//     case "Business Partner":
//       return 1;
//     case "Agent":
//       return 2;
//     case "Executor":
//       return 3;
//     case "Company Secretary":
//       return 4;
//     case "Director":
//       return 5;
//     case "Employee":
//       return 6;
//     case "Helper":
//       return 7;
//     case "Trustee":
//       return 8;
//     default:
//       return 9;
//   }
// }
