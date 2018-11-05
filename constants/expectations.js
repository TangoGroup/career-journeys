export const ROLE_EXPECTATIONS = {
  ASSOCIATE_ENGINEER: {
    TECHNICAL_EXCELLENCE: {
      description: 'A sentence about what Technical Excellence means for an Associate Engineer.',
      behaviors: [
        'Demonstrates broad knowledge of programming concepts.',
        'Works effectively within established architectures, following current best practices.',
        'Can solve small-sized problems, can understand and contribute to solving medium-sized problems.',
        'Demonstrates basic understanding of testing frameworks.',
      ],
    },
    DELIVERY: {
      description: 'A sentence about what Delivery means for an Associate Engineer.',
      behaviors: [
        'Can complete well-defined and subdivided tasks.',
        'Estimates small tasks accurately.',
      ],
    },
  },
  ENGINEER: {
    TECHNICAL_EXCELLENCE: {
      description: 'A sentence about what Technical Excellence means for an Engineer.',
      behaviors: [
        'Owns a small-to-medium feature from technical design through completion.',
        'Can solve medium-sized problems, can understand and contribute to solving large-sized problems.',
        'Tests new code thoroughly, both locally, and in production once shipped.',
        'Develops new instances of existing architecture, or minor improvements to existing architecture.',
      ],
    },
    DELIVERY: {
      description: 'A sentence about what Delivery means for an Engineer.',
      behaviors: [
        'Makes steady, well-paced progress without the need for constant significant feedback from more senior engineers.',
        'Performs research and considers alternative approaches.',
        'Defines and achieves interim milestones.',
        'Engages fully in grooming sessions and technical inceptions.',
      ],
    },
  },
  SENIOR_ENGINEER: {
    TECHNICAL_EXCELLENCE: {
      description: 'A sentence about what Technical Excellence means for a Senior Engineer.',
      behaviors: [
        'Owns a service or large technology component.',
        'Can solve large-sized problems with well designed and architected solutions.',
        'Designs and implements testable solutions to problems. Consistently writes tests for new features and bug fixes. Adds tests for uncovered areas.',
      ],
    },
    DELIVERY: {
      description: 'A sentence about what Delivery means for a Senior Engineer.',
      behaviors: [
        'Has end-to-end responsibility on projects of increasing complexity and contributes to code shared across projects.',
        'Works with product and design teams to tease out requirements / details.',
      ],
    },
  },
  STAFF_ENGINEER: {
    TECHNICAL_EXCELLENCE: {
      description: 'A sentence about what Technical Excellence means for a Staff Engineer.',
      behaviors: [
        'Owns large-scale and impactful service or collection of services.',
        'Mentors peers to avoid antipatterns.',
        'Builds complex, reusable architectures that demonstrate best practices and enable engineers to work more effectively.',
        'Actively educates their team on testing best practices. Builds systems so as to eliminate entire classes of programmer error.',
      ],
    },
    DELIVERY: {
      description: 'A sentence about what Delivery means for a Staff Engineer.',
      behaviors: [
        'Demonstrates ability to take a nebulous project, talk to the right people, define it, split it up into tasks, and ultimately get it done quickly and efficiently.',
        'Delegates tasks to others appropriately.',
      ],
    },
  },
  SENIOR_STAFF_ENGINEER: {
    TECHNICAL_EXCELLENCE: {
      description: 'A sentence about what Technical Excellence means for a Senior Staff Engineer.',
      behaviors: [
        'Designs and builds complex, flexible architectures that demonstrates best practices and prepares for future needs.',
        'Demonstrates organization-level expertise in a particular area or go-to person for solving problems in their domain expertise for all of engineering.',
        'Actively educates their team in their areas of knowledge.',
        'Designs systems and applications for testability and quality.  Marshals resources to improve testability and quality of systems and applications that need it.',
      ],
    },
    DELIVERY: {
      description: 'A sentence about what Delivery means for a Senior Staff Engineer.',
      behaviors: [
        'Takes a business unit’s strategic initiative, defines projects and works with teams to assign ownership and priority to those projects.',
        'Consistently identifies and delivers solutions that improve the efficiency and productivity of team members working in their area of ownership.',
        'Finds ways to deliver requested scope faster.',
        'Finds ways to deliver requested scope at higher quality.',
      ],
    },
  },
  ENGINEERING_MANAGER: {
    TECHNICAL_EXCELLENCE: {
      description: 'A sentence about what Technical Excellence means for an Engineering Manager.',
      behaviors: [
        'Demonstrates technical excellence level of Staff Engineer.',
        'Regularly engaged in providing technical feedback to teammates.',
        'Guides the team on the tools and technologies the team is using.',
        'Pairs with team members to unblock and understand problems and contribute code.',
      ],
    },
    DELIVERY: {
      description: 'A sentence about what Delivery means for an Engineering Manager.',
      behaviors: [
        'Works with product and design teams in early phases to help sequence missions, identify lifts, and staffing constraints.',
        'Takes on responsibility for high priority issues and finds quick resolution.',
        'Ensures non-project tech work (bugs, tech debt, refactors, smaller collaborative efforts) moves along appropriately.',
        'Participates in day-to-day project conversations and provides a strong technical perspective and consistent voice between projects.',
        'Coaches engineers in story writing, teasing requirements and estimating.',
        'Empowers team with technical tools and metrics around their work.',
      ],
    },
  },
  PRINCIPAL_ENGINEER: {
    TECHNICAL_EXCELLENCE: {
      description: 'A sentence about what Technical Excellence means for a Principal Engineer.',
      behaviors: [
        'Drives or facilitates major technology improvements for the company.',
        'Demonstrates industry leading expertise in their primary technology stack.',
        'Gives talks at industry events, and/or publishes research documents, and/or serves as a representative in industry groups or committees.',
      ],
    },
    DELIVERY: {
      description: 'A sentence about what Delivery means for a Principal Engineer.',
      behaviors: [
        'Considers external constraints and business objectives when planning.',
        'Coordinates effective cross-functional collaboration across teams.',
      ],
    },
  },
  ENGINEERING_DIRECTOR: {
    TECHNICAL_EXCELLENCE: {
      description: 'A sentence about what Technical Excellence means for an Engineering Director.',
      behaviors: [
        'Helps solve larger technical and architectural problems with the team when they need support.',
        'Demonstrates solid understanding of entire system, understands the architecture, is able to contribute across multiple technologies, and presents other technologies to leverage.',
        'Works directly with other organizations to help solve technical problems.',
        'Holds entire team including Staff, Principal and Architects to technical expectations and agreements.',
      ],
    },
    DELIVERY: {
      description: 'A sentence about what Delivery means for an Engineering Director.',
      behaviors: [
        'Strategizes with other Directors and VP around resource allocation and hiring, ensuring ongoing delivery is supported.',
        'Participates in project conversations, coordinates details of multi-team initiatives, keeping teams on track with key initiatives.',
        'Works with Engineering Manager to strategize and prioritize around non-project tech work (bugs, tech debt, refactors, smaller collaborative efforts).',
        'Holds entire team including Engineering Manager, Staff, Principal and Architects to process expectations and agreements.',
      ],
    },
  },
};

export const SKILL_EXPECTATIONS = {};
Object.keys(ROLE_EXPECTATIONS).forEach((roleKey) => {
  Object.keys(ROLE_EXPECTATIONS[roleKey]).forEach((skillKey) => {
    if (!SKILL_EXPECTATIONS[skillKey]) SKILL_EXPECTATIONS[skillKey] = {};
    SKILL_EXPECTATIONS[skillKey][roleKey] = ROLE_EXPECTATIONS[roleKey][skillKey];
  });
});
