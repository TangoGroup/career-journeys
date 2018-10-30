import styles from './RolesOverview.styles';
import ROLES from '../constants/roles';

const RolesOverview = () => (
  <div className="root">
    <div className="role">{ROLES.ASSOCIATE_ENGINEER.title}</div>
    <div className="role">{ROLES.ENGINEER.title}</div>
    <div className="role">{ROLES.SENIOR_ENGINEER.title}</div>
    <div className="role wide">{`${ROLES.STAFF_ENGINEER.title} / ${ROLES.TEAM_LEAD.title}`}</div>
    <div className="role-group">
      <div className="role">{`${ROLES.SENIOR_STAFF_ENGINEER.title} / ${ROLES.ARCHITECT.title}`}</div>
      <div className="role">{ROLES.ENGINEERING_MANAGER.title}</div>
    </div>
    <div className="role-group">
      <div className="role">{`${ROLES.PRINCIPAL_ENGINEER.title} / ${ROLES.SENIOR_ARCHITECT.title}`}</div>
      <div className="role">{ROLES.ENGINEERING_DIRECTOR.title}</div>
    </div>
    <style jsx>{styles}</style>
  </div>
);

export default RolesOverview;
