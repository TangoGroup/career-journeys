const ROLES = {
  ASSOCIATE_ENGINEER: {
    title: 'Associate Engineer',
    description: 'A brief paragraph about what it means to be an Associate Engineer',
  },
  ENGINEER: {
    title: 'Engineer',
    description: 'A brief paragraph about what it means to be an Engineer',
  },
  SENIOR_ENGINEER: {
    title: 'Senior Engineer',
    description: 'A brief paragraph about what it means to be a Senior Engineer',
  },
  STAFF_ENGINEER: {
    title: 'Staff Engineer',
    description: 'A brief paragraph about what it means to be a Staff Engineer',
  },
  SENIOR_STAFF_ENGINEER: {
    title: 'Senior Staff Engineer',
    description: 'A brief paragraph about what it means to be a Senior Staff Engineer',
  },
  ENGINEERING_MANAGER: {
    title: 'Engineering Manager',
    description: 'A brief paragraph about what it means to be an Engineering Manager',
  },
  PRINCIPAL_ENGINEER: {
    title: 'Principal Engineer',
    description: 'A brief paragraph about what it means to be a Principal Engineer',
  },
  ENGINEERING_DIRECTOR: {
    title: 'Engineering Director',
    description: 'A brief paragraph about what it means to be an Engineering Director',
  },
};

ROLES.asArray = Object.keys(ROLES).map(key => ({ ...ROLES[key], key }));

export default ROLES;
