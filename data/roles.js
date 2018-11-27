const ROLES = {
  ASSOCIATE_ENGINEER: {
    title: 'Associate Engineer',
  },
  ENGINEER: {
    title: 'Engineer',
  },
  SENIOR_ENGINEER: {
    title: 'Senior Engineer',
  },
  STAFF_ENGINEER: {
    title: 'Staff Engineer',
  },
  SENIOR_STAFF_ENGINEER: {
    title: 'Senior Staff Engineer',
  },
  ENGINEERING_MANAGER: {
    title: 'Engineering Manager',
  },
  PRINCIPAL_ENGINEER: {
    title: 'Principal Engineer',
  },
  ENGINEERING_DIRECTOR: {
    title: 'Engineering Director',
  },
};

export const ROLES_ARRAY = Object.keys(ROLES).map(key => ({ ...ROLES[key], key }));

export default ROLES;
