import styles, { roleLinkStyles } from './RolesDiagram.styles';
import ROLES from '../data/roles';

const RolesDiagram = () => (
  <div className="root">
    <div className="grid">
      <RoleLink className="associate-engineer" roleKey="ASSOCIATE_ENGINEER" />
      <RoleLink className="engineer" roleKey="ENGINEER" />
      <RoleLink className="senior-engineer" roleKey="SENIOR_ENGINEER" />
      <RoleLink className="staff-engineer" roleKey="STAFF_ENGINEER" />
      <RoleLink className="senior-staff-engineer" roleKey="SENIOR_STAFF_ENGINEER" />
      <RoleLink className="engineering-manager" roleKey="ENGINEERING_MANAGER" />
      <RoleLink className="principal-engineer" roleKey="PRINCIPAL_ENGINEER" />
      <RoleLink className="engineering-director" roleKey="ENGINEERING_DIRECTOR" />
    </div>
    <style jsx>{styles}</style>
  </div>
);

const RoleLink = ({ className, roleKey }) => (
  <a href={`#${roleKey}`} className={`role ${className}`}>
    { ROLES[roleKey].title}
    <style jsx>{roleLinkStyles}</style>
  </a>
);

export default RolesDiagram;
