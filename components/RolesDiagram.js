import styles from './RolesDiagram.styles';
import ROLES from '../data/roles';

const RolesDiagram = () => (
  <div className="root">
    <div className="grid">
      <div className="role associate-engineer">{ROLES.ASSOCIATE_ENGINEER.title}</div>
      <div className="role engineer">{ROLES.ENGINEER.title}</div>
      <div className="role senior-engineer">{ROLES.SENIOR_ENGINEER.title}</div>
      <div className="role staff-engineer">{ROLES.STAFF_ENGINEER.title}</div>
      <div className="role senior-staff-engineer">{ROLES.SENIOR_STAFF_ENGINEER.title}</div>
      <div className="role engineering-manager">{ROLES.ENGINEERING_MANAGER.title}</div>
      <div className="role principal-engineer">{ROLES.PRINCIPAL_ENGINEER.title}</div>
      <div className="role engineering-director">{ROLES.ENGINEERING_DIRECTOR.title}</div>
    </div>
    <style jsx>{styles}</style>
  </div>
);

export default RolesDiagram;
