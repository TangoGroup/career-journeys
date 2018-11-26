import styles from './QARolesDiagram.styles';
import QA_ROLES from '../data/qa-roles';

const QARolesDiagram = () => (
  <div className="root">
    <div className="grid">
      <div className="role associate-qa-engineer">{QA_ROLES.ASSOCIATE_QA_ENGINEER.title}</div>
      <div className="role qa-engineer">{QA_ROLES.QA_ENGINEER.title}</div>
      <div className="role senior-qa-engineer">{QA_ROLES.SENIOR_QA_ENGINEER.title}</div>
      <div className="role qa-automation-engineer">{QA_ROLES.QA_AUTOMATION_ENGINEER.title}</div>
      <div className="role senior-qa-automation-engineer">{QA_ROLES.SENIOR_QA_AUTOMATION_ENGINEER.title}</div>
      <div className="role staff-qa-automation-engineer">{QA_ROLES.STAFF_QA_AUTOMATION_ENGINEER.title}</div>
      <div className="role qa-manager">{QA_ROLES.QA_MANAGER.title}</div>
      <div className="role qa-director">{QA_ROLES.QA_DIRECTOR.title}</div>
    </div>
    <style jsx>{styles}</style>
  </div>
);

export default QARolesDiagram;
