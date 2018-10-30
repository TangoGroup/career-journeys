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
};

export const SKILL_EXPECTATIONS = {};
Object.keys(ROLE_EXPECTATIONS).forEach((roleKey) => {
  Object.keys(ROLE_EXPECTATIONS[roleKey]).forEach((skillKey) => {
    if (!SKILL_EXPECTATIONS[skillKey]) SKILL_EXPECTATIONS[skillKey] = {};
    SKILL_EXPECTATIONS[skillKey][roleKey] = ROLE_EXPECTATIONS[roleKey][skillKey];
  });
});
