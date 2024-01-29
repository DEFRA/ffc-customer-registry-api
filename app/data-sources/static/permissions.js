export class Permissions {
  getPermissionGroups () {
    return [
      {
        id: 'BASIC_PAYMENT_SCHEME',
        name: 'Basic payment scheme (BPS)',
        permissions: [
          {
            level: 'NO_ACCESS',
            functions: [],
            privilegeNames: [
              'NO ACCESS - BPS - SA',
              'NO ACCESS - BPS'
            ]
          },
          {
            level: 'VIEW',
            functions: [
              'View business summary',
              'View claims',
              'View land, features and covers'
            ],
            privilegeNames: [
              'VIEW - BPS - SA',
              'View - bps'
            ]
          },
          {
            level: 'AMEND',
            functions: [
              'All permissions in View BPS',
              'Create and edit a claim',
              'Amend a previously submitted claim',
              'Amend land, features and covers'
            ],
            privilegeNames: [
              'AMEND - BPS - SA',
              'Amend - bps'
            ]
          },
          {
            level: 'SUBMIT',
            functions: [
              'All permissions in Amend BPS',
              'Submit a claim',
              'Withdraw a claim',
              'Receive warnings and notifications'
            ],
            privilegeNames: [
              'SUBMIT - BPS - SA',
              'Submit - bps'
            ]
          }
        ]
      },
      {
        id: 'BUSINESS_DETAILS',
        name: 'Business details',
        permissions: [
          {
            level: 'VIEW',
            functions: [
              'View business details',
              'View people associated with the business'
            ],
            privilegeNames: [
              'View - business'
            ]

          },
          {
            level: 'AMEND',
            functions: [
              'All permissions in View Business Details',
              'Amend business and correspondence contact details'
            ],
            privilegeNames: [
              'Amend - business'
            ]
          },
          {
            level: 'MAKE_LEGAL_CHANGES',
            functions: [
              'All permissions in Amend Business Details',
              'Amend controlled information, such as business name',
              'Confirm business details',
              'Amend bank account details',
              'Make young/new farmer declaration'
            ],
            privilegeNames: [
              'Make legal changes - business'
            ]
          },
          {
            level: 'FULL_PERMISSION',
            functions: [
              'All permissions in Make Legal Changes Business Details',
              'Add someone to the business',
              'Give permissions on business'
            ],
            privilegeNames: [
              'Full permission - business'
            ]
          }
        ]
      },
      {
        id: 'COUNTRYSIDE_STEWARDSHIP_AGREEMENTS',
        name: 'Countryside Stewardship (Agreements)',
        permissions: [
          {
            level: 'NO_ACCESS',
            functions: [],
            privilegeNames: [
              'NO ACCESS - CS AGREE - SA',
              'NO ACCESS - CS AGREE'
            ]
          },
          {
            level: 'VIEW',
            functions: [
              'View CS Agreements',
              'View Land, Features and Cover',
              'View CS Agreement amendments',
              'View CS agreement Transfers',
              'View CS Claims'
            ],
            privilegeNames: [
              'VIEW - CS AGREE - SA',
              'View - cs agree'
            ]
          },
          {
            level: 'AMEND',
            functions: [
              'All permissions in View CS Agreements',
              'Amend land, Features and Covers',
              'Create and edit a CS claim',
              'Amend a previously submitted claim',
              'Create and edit a CS agreement Amendment',
              'Revise a previously submitted agreement amendment',
              'Create and Edit a CS agreement transfer',
              'Revise a previously submitted agreement transfer'
            ],
            privilegeNames: [
              'AMEND - CS AGREE - SA',
              'Amend - cs agree'
            ]
          },
          {
            level: 'SUBMIT',
            functions: [
              'All permissions in Amend CS agreements',
              'Submit Acceptance of CS Agreement offer',
              'Submit rejection of CS agreement offer',
              'Submit (and resubmit) a CS claim',
              'Withdraw a CS claim',
              'Submit (and resubmit) a CS agreement amendment',
              'Withdraw a CS agreement amendment',
              'Submit (and resubmit) a CS agreement transfer',
              'Withdraw a CS agreement transfer',
              'Receive warnings and notifications'
            ],
            privilegeNames: [
              'SUBMIT - CS AGREE - SA',
              'Submit - cs agree'
            ]
          }
        ]
      },
      {
        id: 'COUNTRYSIDE_STEWARDSHIP_APPLICATIONS',
        name: 'Countryside Stewardship (Applications)',
        permissions: [
          {
            level: 'NO_ACCESS',
            functions: [],
            privilegeNames: [
              'NO ACCESS - CS APP - SA',
              'NO ACCESS - CS APP'
            ]
          },
          {
            level: 'VIEW',
            functions: [
              'View CS Scheme eligibility',
              'View Applications',
              'View land, features and covers',
              'View CS agreement offer'
            ],
            privilegeNames: [
              'VIEW - CS APP - SA',
              'VIEW - CS APP'
            ]
          },
          {
            level: 'AMEND',
            functions: [
              'All permissions in View CS Applications',
              'View draft CS Agreements',
              'Create and edit a CS application',
              'Amend a previously submitted CS application',
              'Amend Land, Features and Covers'
            ],
            privilegeNames: [
              'AMEND - CS APP - SA',
              'Amend - cs app'
            ]
          },
          {
            level: 'SUBMIT',
            functions: [
              'All permissions in Amend CS permissions',
              'Submit CS Application',
              'Withdraw CS application',
              'Receive warnings and notifications'
            ],
            privilegeNames: [
              'SUBMIT - CS APP - SA',
              'Submit - cs app'
            ]
          }
        ]
      },
      {
        id: 'ENTITLEMENTS',
        name: 'Entitlements',
        permissions: [
          {
            level: 'NO_ACCESS',
            functions: [],
            privilegeNames: [
              'NO ACCESS - ENTITLEMENT - SA',
              'NO ACCESS - ENTITLEMENT'
            ]
          },
          {
            level: 'VIEW',
            functions: [
              'View entitlements'
            ],
            privilegeNames: [
              'VIEW - ENTITLEMENT - SA',
              'View - entitlement'
            ]
          },
          {
            level: 'AMEND',
            functions: [
              'View entitlements',
              'Transfer entitlements',
              'Apply for new entitlements'
            ],
            privilegeNames: [
              'AMEND - ENTITLEMENT - SA',
              'Amend - entitlement'
            ]
          }
        ]
      },
      {
        id: 'ENVIRONMENTAL_LAND_MANAGEMENT_APPLICATIONS',
        name: 'Environmental Land Management (Applications)',
        permissions: [
          {
            level: 'VIEW',
            functions: [
              'View Environmental Land Management scheme eligibility',
              'View Environmental Land Management applications',
              'View land, features and covers',
              'View Environmental Land Management agreement offer'
            ],
            privilegeNames: [
              'ELM_APPLICATION_VIEW'
            ]
          },
          {
            level: 'AMEND',
            functions: [
              'All permissions in View Environmental Land Management',
              'View Environmental Land Management agreements',
              'Create and edit a Environmental Land Management application',
              'Amend (but not resubmit) a previously submitted Environmental Land Management application',
              'Amend land, features and covers'
            ],
            privilegeNames: [
              'ELM_APPLICATION_AMEND'
            ]
          },
          {
            level: 'SUBMIT',
            functions: [
              'All permissions in Amend Environmental Land Management',
              'Submit Environmental Land Management application',
              'Withdraw Environmental Land Management application',
              'Submit acceptance of Environmental Land Management agreement offer',
              'Submit rejection of Environmental Land Management agreement offer',
              'Receive all application correspondence including all warnings and notifications'
            ],
            privilegeNames: [
              'ELM_APPLICATION_SUBMIT'
            ]
          }
        ]
      },
      {
        id: 'LAND_DETAILS',
        name: 'Land details',
        permissions: [
          {
            level: 'NO_ACCESS',
            functions: [],
            privilegeNames: [
              'NO ACCESS - LAND - SA',
              'NO ACCESS - LAND'
            ]
          },
          {
            level: 'VIEW',
            functions: [
              'View land, features and covers'
            ],
            privilegeNames: [
              'VIEW - LAND - SA',
              'View - land'
            ]
          },
          {
            level: 'AMEND',
            functions: [
              'View land, features and covers',
              'Amend land, features and covers',
              'Transfer land'
            ],
            privilegeNames: [
              'AMEND - LAND - SA',
              'Amend - land'
            ]
          }
        ]
      }
    ]
  }
}
