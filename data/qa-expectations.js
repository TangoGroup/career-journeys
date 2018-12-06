const QA_ROLE_EXPECTATIONS = {
  ASSOCIATE_QA_ENGINEER: {
    TECHNICAL_EXCELLENCE: {
      behaviors: [
        'Able to follow test cases and acceptance criteria when executing manual testing.',
        'Support in the creation and maintenance of documentation (Test Cases, Process docs, Test Plans).',
        'Troubleshoot defects and accurately pinpoint errors.',
        'Understand basic web and mobile testing strategies for testing cross-browser and mobile apps.',
      ],
    },
    DELIVERY: {
      inheritsBehaviorsFrom: 'ASSOCIATE_ENGINEER',
    },
    COLLABORATION: {
      inheritsBehaviorsFrom: 'ASSOCIATE_ENGINEER',
    },
    STRATEGIC_CLARITY: {
      inheritsBehaviorsFrom: 'ASSOCIATE_ENGINEER',
    },
    LEADERSHIP: {
      inheritsBehaviorsFrom: 'ASSOCIATE_ENGINEER',
    },
  },
  QA_ENGINEER: {
    TECHNICAL_EXCELLENCE: {
      behaviors: [
        'Create and maintain documentation (Test Cases, Process docs, Test Plans).',
        'Perform exploratory, functional, regression, integration and end-to-end testing across mobile and web clients.',
        'Proficient in trouble shooting errors using various tools (Devtools, Charles etc..).',
      ],
    },
    DELIVERY: {
      inheritsBehaviorsFrom: 'ENGINEER',
    },
    COLLABORATION: {
      inheritsBehaviorsFrom: 'ENGINEER',
    },
    STRATEGIC_CLARITY: {
      inheritsBehaviorsFrom: 'ENGINEER',
    },
    LEADERSHIP: {
      inheritsBehaviorsFrom: 'ENGINEER',
    },
  },
  SENIOR_QA_ENGINEER: {
    TECHNICAL_EXCELLENCE: {
      behaviors: [
        'Assist  in architecting manual test suites and frameworks.',
        'Maintain and create new automation test cases.',
        'Able to test multiple clients (Android/iOS/web) and platform implementations.',
        'Assist in managing test suites, team boards, and process documentation.',
      ],
    },
    DELIVERY: {
      inheritsBehaviorsFrom: 'SENIOR_ENGINEER',
    },
    COLLABORATION: {
      inheritsBehaviorsFrom: 'SENIOR_ENGINEER',
    },
    STRATEGIC_CLARITY: {
      inheritsBehaviorsFrom: 'SENIOR_ENGINEER',
    },
    LEADERSHIP: {
      inheritsBehaviorsFrom: 'SENIOR_ENGINEER',
    },
  },
  QA_AUTOMATION_ENGINEER: {
    TECHNICAL_EXCELLENCE: {
      behaviors: [
        'Basic understanding of object oriented programming in a modern language.',
        'Basic understanding on Automation Frameworks (Selenium, Cucumber Appium etc…).',
        'Proficiently able to transcribe manual test cases to automated (Gherkin) test cases.',
        'Proficiently able to write automated test scripts from automation (Gherkin) test cases.',
        'Proficiently able to troubleshoot and fix broken test scripts.',
      ],
    },
    DELIVERY: {
      inheritsBehaviorsFrom: 'SENIOR_ENGINEER',
    },
    COLLABORATION: {
      inheritsBehaviorsFrom: 'SENIOR_ENGINEER',
    },
    STRATEGIC_CLARITY: {
      inheritsBehaviorsFrom: 'SENIOR_ENGINEER',
    },
    LEADERSHIP: {
      inheritsBehaviorsFrom: 'SENIOR_ENGINEER',
    },
  },
  SENIOR_QA_AUTOMATION_ENGINEER: {
    TECHNICAL_EXCELLENCE: {
      behaviors: [
        'Demonstrated skill in object oriented programming in a modern language.',
        'Proficient working with Automation Frameworks (Selenium, Cucumber, Appium etc…).',
        'Proficiently able to create automated test scripts for mobile and web clients.',
        'Proficiently able to configure and maintain automation test environments.',
        'Basic understanding of automation testing for service and back-end layers.',
      ],
    },
    DELIVERY: {
      inheritsBehaviorsFrom: 'STAFF_ENGINEER',
    },
    COLLABORATION: {
      inheritsBehaviorsFrom: 'STAFF_ENGINEER',
    },
    STRATEGIC_CLARITY: {
      inheritsBehaviorsFrom: 'STAFF_ENGINEER',
    },
    LEADERSHIP: {
      inheritsBehaviorsFrom: 'STAFF_ENGINEER',
    },
  },
  STAFF_QA_AUTOMATION_ENGINEER: {
    TECHNICAL_EXCELLENCE: {
      behaviors: [
        'Adept in implementing automation architecture and overarching automation test strategy using various technologies.',
        'Extensive knowledge in supporting continuous integration and automated build systems.',
        'Adept knowledge in automation of complex platform layers (Client, API, Services, Back-end).',
        'Very strong skills in analysis and visualization of test data.',
      ],
    },
    DELIVERY: {
      inheritsBehaviorsFrom: 'SENIOR_STAFF_ENGINEER',
    },
    COLLABORATION: {
      inheritsBehaviorsFrom: 'SENIOR_STAFF_ENGINEER',
    },
    STRATEGIC_CLARITY: {
      inheritsBehaviorsFrom: 'SENIOR_STAFF_ENGINEER',
    },
    LEADERSHIP: {
      inheritsBehaviorsFrom: 'SENIOR_STAFF_ENGINEER',
    },
  },
  QA_MANAGER: {
    TECHNICAL_EXCELLENCE: {
      inheritsBehaviorsFrom: 'ENGINEERING_MANAGER',
    },
    DELIVERY: {
      inheritsBehaviorsFrom: 'ENGINEERING_MANAGER',
    },
    COLLABORATION: {
      inheritsBehaviorsFrom: 'ENGINEERING_MANAGER',
    },
    STRATEGIC_CLARITY: {
      inheritsBehaviorsFrom: 'SENIOR_STAFF_ENGINEER',
    },
    LEADERSHIP: {
      inheritsBehaviorsFrom: 'SENIOR_STAFF_ENGINEER',
    },
  },
  QA_DIRECTOR: {
    TECHNICAL_EXCELLENCE: {
      inheritsBehaviorsFrom: 'ENGINEERING_DIRECTOR',
    },
    DELIVERY: {
      inheritsBehaviorsFrom: 'ENGINEERING_DIRECTOR',
    },
    COLLABORATION: {
      inheritsBehaviorsFrom: 'ENGINEERING_DIRECTOR',
    },
    STRATEGIC_CLARITY: {
      inheritsBehaviorsFrom: 'PRINCIPAL_ENGINEER',
    },
    LEADERSHIP: {
      inheritsBehaviorsFrom: 'PRINCIPAL_ENGINEER',
    },
  },
};

export default QA_ROLE_EXPECTATIONS;
