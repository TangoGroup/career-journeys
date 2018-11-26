const QA_ROLE_EXPECTATIONS = {
  ASSOCIATE_QA_ENGINEER: {
    TECHNICAL_EXCELLENCE: {
      behaviors: [
        'Demonstrates broad knowledge of programming concepts.',
        'Works effectively within established architectures, following current best practices.',
        'Can solve small-sized problems, can understand and contribute to solving medium-sized problems.',
        'Demonstrates basic understanding of testing frameworks.',
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
        'Owns a small-to-medium feature from technical design through completion.',
        'Can solve medium-sized problems, can understand and contribute to solving large-sized problems.',
        'Tests new code thoroughly, both locally, and in production once shipped.',
        'Develops new instances of existing architecture, or minor improvements to existing architecture.',
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
        'Owns a service or large technology component.',
        'Can solve large-sized problems with well designed and architected solutions.',
        'Designs and implements testable solutions to problems. Consistently writes tests for new features and bug fixes. Adds tests for uncovered areas.',
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
        'Owns large-scale and impactful service or collection of services.',
        'Mentors peers to avoid antipatterns.',
        'Builds complex, reusable architectures that demonstrate best practices and enable engineers to work more effectively.',
        'Actively educates their team on testing best practices. Builds systems so as to eliminate entire classes of programmer error.',
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
        'Designs and builds complex, flexible architectures that demonstrates best practices and prepares for future needs.',
        'Demonstrates organization-level expertise in a particular area or go-to person for solving problems in their domain expertise for all of engineering.',
        'Actively educates their team in their areas of knowledge.',
        'Designs systems and applications for testability and quality.  Marshals resources to improve testability and quality of systems and applications that need it.',
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
        'Helps solve larger technical and architectural problems with the team when they need support.',
        'Demonstrates solid understanding of entire system, understands the architecture, is able to contribute across multiple technologies, and presents other technologies to leverage.',
        'Works directly with other organizations to help solve technical problems.',
        'Holds entire team including Staff, Principal and Architects to technical expectations and agreements.',
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
