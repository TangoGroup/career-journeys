import styles, { roleStyles } from './QARolesDiagram.styles';
import QA_ROLES from '../data/qa-roles';

const QARolesDiagram = () => (
  <div className="root">
    <div className="grid">
      <Role className="associate-qa-engineer" roleKey="ASSOCIATE_QA_ENGINEER" />
      <Role className="qa-engineer" roleKey="QA_ENGINEER" />
      <Role className="senior-qa-engineer" roleKey="SENIOR_QA_ENGINEER" />
      <Role className="qa-automation-engineer" roleKey="QA_AUTOMATION_ENGINEER" />
      <Role className="senior-qa-automation-engineer" roleKey="SENIOR_QA_AUTOMATION_ENGINEER" />
      <Role className="staff-qa-automation-engineer" roleKey="STAFF_QA_AUTOMATION_ENGINEER" />
      <Role className="qa-manager" roleKey="QA_MANAGER" />
      <Role className="qa-director" roleKey="QA_DIRECTOR" />
    </div>
    <style jsx>{styles}</style>
  </div>
);

const Role = ({ children, className, roleKey }) => (
  <div className={`role ${className}`}>
    <a href={`#${roleKey}`}>{ QA_ROLES[roleKey].title }</a>
    { children }
    <style jsx>{roleStyles}</style>
  </div>
);

export default QARolesDiagram;
