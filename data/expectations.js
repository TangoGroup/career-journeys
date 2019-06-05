import QA_ROLE_EXPECTATIONS from './qa-expectations';

export const ROLE_EXPECTATIONS = {
  ASSOCIATE_ENGINEER: {
    TECHNICAL_EXCELLENCE: {
      behaviors: [
        'Demonstrates broad knowledge of programming concepts.',
        'Works effectively within established architectures, following current best practices.',
        'Can solve small-sized problems, can understand and contribute to solving medium-sized problems.',
        'Demonstrates basic understanding of testing frameworks.',
      ],
    },
    DELIVERY: {
      behaviors: [
        'Can complete well-defined and subdivided tasks.',
        'Estimates small tasks accurately.',
      ],
    },
    COLLABORATION: {
      behaviors: [
        'Communicates with peers effectively and in a timely manner.',
        'Effectively incorporates feedback from team members.',
        'Interacts with team with a positive and constructive attitude.',
        'Effectively proposes dissenting points of view during team discussions.',
      ],
    },
    STRATEGIC_CLARITY: {
      behaviors: [
        'Understands and can explain Gloo’s Core Purpose / Mission and Design Principles',
        'Understands the priorities and objectives for the team',
        'Clearly communicates to team members and manager through status updates, comments on code changes and dialog in stories.',
      ],
    },
    LEADERSHIP: {
      behaviors: [
        'Committed to self-improvement, incorporating feedback from peers and their manager.',
        'Participates in team decision-making processes, asks questions and provides feedback.',
        'Identifies and communicates team issues and opportunities for improvement.',
      ],
    },
  },
  ENGINEER: {
    TECHNICAL_EXCELLENCE: {
      behaviors: [
        'Owns a small-to-medium feature from technical design through completion.',
        'Can solve medium-sized problems, can understand and contribute to solving large-sized problems.',
        'Tests new code thoroughly, both locally, and in production once shipped.',
        'Develops new instances of existing architecture, or minor improvements to existing architecture.',
      ],
    },
    DELIVERY: {
      behaviors: [
        'Makes steady, well-paced progress without the need for constant significant feedback from more senior engineers.',
        'Performs research and considers alternative approaches.',
        'Defines and achieves interim milestones.',
        'Engages fully in grooming sessions and technical inceptions.',
      ],
    },
    COLLABORATION: {
      behaviors: [
        'Communicates with the wider team appropriately, focusing on timeliness and good quality conversations.',
        'Puts team priorities over their own.',
        'Works closely with peers to ensure work meets the acceptance criteria.',
        'Effectively listens to opposing points of view during team discussions and allows alternate ideas to influence perspective.',

      ],
    },
    STRATEGIC_CLARITY: {
      behaviors: [
        'Can describe connection between Gloo’s Products and Strategy and Gloo’s Purpose / Mission and Design Principles.',
        'Actively learns more about others parts of Gloo',
        'Actively engages in understanding Gloo strategy how it impacts the team.',
        'Actively contributes to the creation and maintenance of documentation',
      ],
    },
    LEADERSHIP: {
      behaviors: [
        'Informally mentors individuals in an ad-hoc way, supports new hires and conveys institutional knowledge.',
        'Influences team decision-making process with domain knowledge.',
        'Investigates potential causes for team issues and proposes solutions for improvement.',
      ],
    },
  },
  SENIOR_ENGINEER: {
    TECHNICAL_EXCELLENCE: {
      behaviors: [
        'Owns a service or large technology component.',
        'Can solve large-sized problems with well designed and architected solutions.',
        'Designs and implements testable solutions to problems. Consistently writes tests for new features and bug fixes. Adds tests for uncovered areas.',
      ],
    },
    DELIVERY: {
      behaviors: [
        'Has end-to-end responsibility on projects of increasing complexity and contributes across projects.',
        'Works with product and design teams to tease out requirements / details.',
      ],
    },
    COLLABORATION: {
      behaviors: [
        'Proactively shares information, actively solicits feedback, and facilitates communication for multiple stakeholders.',
        'Can explain complex problems and solutions to people inside and outside their domain of expertise.',
        'Seeks to resolve disagreements with open and honest communication. Learns to disagree and commit. ',
      ],
    },
    STRATEGIC_CLARITY: {
      behaviors: [
        'Actively engages with broader team in discussions regarding Strategy and Principles. Helps teammates understand how their work connects to overall strategy, purpose and what we do.',
        'Demonstrates the ability to translate between business requirements and technical requirements.',
        'Actively contributes to team understanding by creating and giving presentations',
      ],
    },
    LEADERSHIP: {
      behaviors: [
        'Mentors people proactively as individuals or groups.',
        'Brings knowledge and experience to decision-making process.',
        'Occasionally solves team issues and implementing improvement.',
      ],
    },
  },
  STAFF_ENGINEER: {
    TECHNICAL_EXCELLENCE: {
      behaviors: [
        'Owns large-scale and impactful service or collection of services.',
        'Mentors peers to avoid antipatterns.',
        'Builds complex, reusable architectures that demonstrate best practices and enable engineers to work more effectively.',
        'Actively educates their team on testing best practices. Builds systems so as to eliminate entire classes of programmer error.',
      ],
    },
    DELIVERY: {
      behaviors: [
        'Demonstrates ability to take a nebulous project, talk to the right people, define it, split it up into tasks, and ultimately get it done quickly and efficiently.',
        'Delegates tasks to others appropriately.',
      ],
    },
    COLLABORATION: {
      behaviors: [
        'Communicates complex ideas skillfully and with nuance, and establishes alignment within the wider organization.',
        'Actively helps solve cross-team issues by assisting other teams.',
        'Leads the team through complex decisions and effectively resolves disagreements between teammates.',
      ],
    },
    STRATEGIC_CLARITY: {
      behaviors: [
        'Helps align product and engineering with Gloo Strategy and Design principles.',
        'Identifies appropriate metrics that tie back to business objectives and measures those when making decisions.',
        'Understands various product offerings and how they work together.',
        'Actively works toward balancing team, engineering and Gloo objectives',
        'Discovers need for and creates and maintains architectural, process and strategic documentation for the team',
        'Discovers, advocates for and drives small to moderately complex process changes to team process',
      ],
    },
    LEADERSHIP: {
      behaviors: [
        'Teaches small groups of engineers.',
        'Leads team through timely and effective decision making process.',
        'Frequently takes lead in solving team issues, implements improvements and proactively communicates with stakeholders.',
      ],
    },
  },
  SENIOR_STAFF_ENGINEER: {
    TECHNICAL_EXCELLENCE: {
      behaviors: [
        'Designs and builds complex, flexible architectures that demonstrates best practices and prepares for future needs.',
        'Demonstrates organization-level expertise in a particular area or go-to person for solving problems in their domain expertise for all of engineering.',
        'Actively educates their team in their areas of knowledge.',
        'Designs systems and applications for testability and quality.  Marshals resources to improve testability and quality of systems and applications that need it.',
      ],
    },
    DELIVERY: {
      behaviors: [
        'Takes a business unit’s strategic initiative, defines projects and works with teams to assign ownership and priority to those projects.',
        'Consistently identifies and delivers solutions that improve the efficiency and productivity of team members working in their area of ownership.',
        'Finds ways to deliver requested scope faster.',
        'Finds ways to deliver requested scope at higher quality.',
      ],
    },
    COLLABORATION: {
      behaviors: [
        'Collaborates across functions including areas outside of engineering.',
        'Designs and refines processes that encourage a culture of collaboration.',
        'Seeks to create solid working relationships with all teammates through open and honest dialog. Encourages others to disagree and commit in order to avoid unresolved conflict.',
      ],
    },
    STRATEGIC_CLARITY: {
      behaviors: [
        'Adds clarity and nuanced understanding to Strategy and Design principles.',
        'Represents engineering in cross-org discussions.',
        'Helps guide their team on broader impact and mentors them on how their decisions impact Gloo.',
        'Aligns technology strategy with product strategy in partnership with Directors and VP.',
        'Leads team to create and maintain architectural , process and strategic documentation for the engineering organization',
        'Discovers, advocates for and creates buy in from stakeholders to drive complex process or strategy changes across teams',
      ],
    },
    LEADERSHIP: {
      behaviors: [
        'Encourages people to mentor each other and creates ways for them to do so.',
        'Empowers Staff Engineers and Team Lead to make decisions.',
        'Committed to continuous improvement through team retros and small improvements.',
        'Motivates the team and rights the ship in rough times.',
        'Serves team with hands-on effort.',
        'Able to communicate tough realities to stakeholders.',
        'Supports and guides team members with their Career Journey.',
      ],
    },
  },
  ENGINEERING_MANAGER: {
    TECHNICAL_EXCELLENCE: {
      behaviors: [
        'Demonstrates technical excellence level of Staff Engineer.',
        'Regularly engaged in providing technical feedback to teammates.',
        'Guides the team on the tools and technologies the team is using.',
        'Pairs with team members to unblock and understand problems and contribute code.',
      ],
    },
    DELIVERY: {
      behaviors: [
        'Works with product and design teams in early phases to help sequence missions, identify lifts, and staffing constraints.',
        'Takes on responsibility for high priority issues and finds quick resolution.',
        'Ensures non-project tech work (bugs, tech debt, refactors, smaller collaborative efforts) moves along appropriately.',
        'Participates in day-to-day project conversations and provides a strong technical perspective and consistent voice between projects.',
        'Coaches engineers in story writing, teasing requirements and estimating.',
        'Empowers team with technical tools and metrics around their work.',
      ],
    },
    COLLABORATION: {
      behaviors: [
        'Develops and improves collaboration between teams within engineering.',
        'Engages individuals from other teams and departments around ongoing issues, concerns, technical issues and solutions.',
      ],
    },
    STRATEGIC_CLARITY: {
      inheritsBehaviorsFrom: 'SENIOR_STAFF_ENGINEER',
    },
    LEADERSHIP: {
      inheritsBehaviorsFrom: 'SENIOR_STAFF_ENGINEER',
    },
  },
  PRINCIPAL_ENGINEER: {
    TECHNICAL_EXCELLENCE: {
      behaviors: [
        'Drives or facilitates major technology improvements for the company.',
        'Demonstrates industry leading expertise in their primary technology stack.',
        'Gives talks at industry events, and/or publishes research documents, and/or serves as a representative in industry groups or committees.',
      ],
    },
    DELIVERY: {
      behaviors: [
        'Considers external constraints and business objectives when planning.',
        'Coordinates effective cross-functional collaboration across teams.',
      ],
    },
    COLLABORATION: {
      behaviors: [
        'Actively works with company leadership to drive solutions that solve broader issues.',
        'Effectively seeks feedback on major technical initiatives from all company stakeholders, foresees potential downstream effects and communicates and crafts roadmaps with full transparency.',
      ],
    },
    STRATEGIC_CLARITY: {
      behaviors: [
        'Understands, promotes and clarifies the company vision and principles throughout engineering.',
        'Represents engineering to outside partners and stakeholders.',
        'Connects the work we’re doing to the principles and goals of the company.',
        'Demonstrates a deep understanding future product roadmap.',
        'Leads the Gloo organization in creating and maintenance of architectural, process and strategic documentation.',
        'Discovers, advocates for, and successfully improves process or strategy across Gloo organization',
      ],
    },
    LEADERSHIP: {
      behaviors: [
        'Instills and promotes a culture of learning and development within engineering.',
        'Promotes a culture that encourages courageous decision making.',
        'Defines processes with stakeholders that empower the team, have alignment with company goals, improve team’s progress, and demonstrate success.',
        'Promotes a positive, fun working environment both inside and outside of Gloo.',
        'Instills trust and confidence with team through transparency and action.',
      ],
    },
  },
  ENGINEERING_DIRECTOR: {
    TECHNICAL_EXCELLENCE: {
      behaviors: [
        'Helps solve larger technical and architectural problems with the team when they need support.',
        'Demonstrates solid understanding of entire system, understands the architecture, is able to contribute across multiple technologies, and presents other technologies to leverage.',
        'Works directly with other organizations to help solve technical problems.',
        'Holds entire team including Staff, Principal and Architects to technical expectations and agreements.',
      ],
    },
    DELIVERY: {
      behaviors: [
        'Strategizes with other Directors and VP around resource allocation and hiring, ensuring ongoing delivery is supported.',
        'Participates in project conversations, coordinates details of multi-team initiatives, keeping teams on track with key initiatives.',
        'Works with Engineering Manager to strategize and prioritize around non-project tech work (bugs, tech debt, refactors, smaller collaborative efforts).',
        'Holds entire team including Engineering Manager, Staff, Principal and Architects to process expectations and agreements.',
      ],
    },
    COLLABORATION: {
      behaviors: [
        'Develops and improves collaboration between engineering and other departments.',
        'Coordinates (with other volunteers) learning and collaboration opportunities (lunch ‘n’ learns, community events, user groups, conference attendance).',
        'Identifies and addresses needs for more collaboration (off-sites discussions, multi-team sync meetings, etc.).',
        'Communicates engineering initiatives, progress, tradeoffs, etc. to a large audience of technical / non technical people.',
      ],
    },
    STRATEGIC_CLARITY: {
      inheritsBehaviorsFrom: 'PRINCIPAL_ENGINEER',
    },
    LEADERSHIP: {
      inheritsBehaviorsFrom: 'PRINCIPAL_ENGINEER',
    },
  },
  ...QA_ROLE_EXPECTATIONS,
};

export const SKILL_EXPECTATIONS = {};
Object.keys(ROLE_EXPECTATIONS).forEach((roleKey) => {
  Object.keys(ROLE_EXPECTATIONS[roleKey]).forEach((skillKey) => {
    if (!SKILL_EXPECTATIONS[skillKey]) SKILL_EXPECTATIONS[skillKey] = {};
    SKILL_EXPECTATIONS[skillKey][roleKey] = ROLE_EXPECTATIONS[roleKey][skillKey];
  });
});
