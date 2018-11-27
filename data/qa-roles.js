const QA_ROLES = {
  ASSOCIATE_QA_ENGINEER: {
    title: 'Associate QA Engineer',
  },
  QA_ENGINEER: {
    title: 'QA Engineer',
  },
  SENIOR_QA_ENGINEER: {
    title: 'Senior QA Engineer',
  },
  QA_AUTOMATION_ENGINEER: {
    title: 'QA Automation Engineer',
  },
  SENIOR_QA_AUTOMATION_ENGINEER: {
    title: 'Senior QA Automation Engineer',
  },
  STAFF_QA_AUTOMATION_ENGINEER: {
    title: 'Staff QA Automation Engineer',
  },
  QA_MANAGER: {
    title: 'QA Manager',
  },
  QA_DIRECTOR: {
    title: 'QA Director',
  },
};

QA_ROLES.asArray = Object.keys(QA_ROLES).map(key => ({ ...QA_ROLES[key], key }));

export default QA_ROLES;
