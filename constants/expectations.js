export const ROLE_EXPECTATIONS = {
  ASSOCIATE_ENGINEER: {
    TECHNICAL_EXCELLENCE: {
      description: 'A sentence about what Technical Excellence means for an Associate Engineer.',
      behaviors: [
        'Broad knowledge of programming concepts.',
      ],
    },
    DELIVERY: {
      description: 'A sentence about what Delivery means for an Associate Engineer.',
      behaviors: [
        'Can complete well-defined and subdivided tasks.',
      ],
    },
  },
  ENGINEER: {
    TECHNICAL_EXCELLENCE: {
      description: 'A sentence about what Technical Excellence means for an Engineer.',
      behaviors: [
        'Owns a small-to-medium feature from technical design through completion.',
      ],
    },
    DELIVERY: {
      description: 'A sentence about what Delivery means for an Engineer.',
      behaviors: [
        'Makes steady, well-paced progress without the need for constant significant feedback from more senior engineers.',
      ],
    },
  },
  SENIOR_ENGINEER: {
    TECHNICAL_EXCELLENCE: {
      description: 'A sentence about what Technical Excellence means for a Senior Engineer.',
      behaviors: [
        'TBD',
      ],
    },
    DELIVERY: {
      description: 'A sentence about what Delivery means for a Senior Engineer.',
      behaviors: [
        'TBD',
      ],
    },
  },
  STAFF_ENGINEER: {
    TECHNICAL_EXCELLENCE: {
      description: 'A sentence about what Technical Excellence means for a Staff Engineer.',
      behaviors: [
        'TBD',
      ],
    },
    DELIVERY: {
      description: 'A sentence about what Delivery means for a Staff Engineer.',
      behaviors: [
        'TBD',
      ],
    },
  },
  SENIOR_STAFF_ENGINEER: {
    TECHNICAL_EXCELLENCE: {
      description: 'A sentence about what Technical Excellence means for a Senior Staff Engineer.',
      behaviors: [
        'TBD',
      ],
    },
    DELIVERY: {
      description: 'A sentence about what Delivery means for a Senior Staff Engineer.',
      behaviors: [
        'TBD',
      ],
    },
  },
  ENGINEERING_MANAGER: {
    TECHNICAL_EXCELLENCE: {
      description: 'A sentence about what Technical Excellence means for an Engineering Manager.',
      behaviors: [
        'TBD',
      ],
    },
    DELIVERY: {
      description: 'A sentence about what Delivery means for an Engineering Manager.',
      behaviors: [
        'TBD',
      ],
    },
  },
  PRINCIPAL_ENGINEER: {
    TECHNICAL_EXCELLENCE: {
      description: 'A sentence about what Technical Excellence means for a Principal Engineer.',
      behaviors: [
        'TBD',
      ],
    },
    DELIVERY: {
      description: 'A sentence about what Delivery means for a Principal Engineer.',
      behaviors: [
        'TBD',
      ],
    },
  },
  ENGINEERING_DIRECTOR: {
    TECHNICAL_EXCELLENCE: {
      description: 'A sentence about what Technical Excellence means for an Engineering Director.',
      behaviors: [
        'TBD',
      ],
    },
    DELIVERY: {
      description: 'A sentence about what Delivery means for an Engineering Director.',
      behaviors: [
        'TBD',
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
