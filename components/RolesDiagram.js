import styles, { functionStyles, roleStyles } from './RolesDiagram.styles';
import ROLES from '../data/roles';

const RolesDiagram = () => (
  <div className="root">
    <div className="grid">
      <Role className="associate-engineer" roleKey="ASSOCIATE_ENGINEER" />
      <Role className="engineer" roleKey="ENGINEER" />
      <Role className="senior-engineer" roleKey="SENIOR_ENGINEER" />
      <Role className="staff-engineer" roleKey="STAFF_ENGINEER">
        <Function href="/functions#team-lead">Team Lead</Function>
      </Role>
      <Role className="senior-staff-engineer" roleKey="SENIOR_STAFF_ENGINEER">
        <Function href="/functions#team-architect">Team Architect</Function>
      </Role>
      <Role className="engineering-manager" roleKey="ENGINEERING_MANAGER" />
      <Role className="principal-engineer" roleKey="PRINCIPAL_ENGINEER" />
      <Role className="engineering-director" roleKey="ENGINEERING_DIRECTOR" />
    </div>
    <style jsx>{styles}</style>
  </div>
);

const Role = ({ children, className, roleKey }) => (
  <div className={`role ${className}`}>
    <a href={`#${roleKey}`}>{ ROLES[roleKey].title }</a>
    { children }
    <style jsx>{roleStyles}</style>
  </div>
);

const Function = (props) => {
  const { children, href } = props;

  return (
    <div className="function">
      <a href={href}>{ children }</a>
      <style jsx>{functionStyles}</style>
    </div>
  );
};

export default RolesDiagram;
