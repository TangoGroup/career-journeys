import styles from './RolesOverview.styles';

const RolesOverview = () => (
  <div className="root">
    <div className="role">Associate Engineer</div>
    <div className="role">Engineer</div>
    <div className="role">Senior Engineer</div>
    <div className="role wide">Staff Engineer / Team Lead</div>
    <div className="role-group">
      <div className="role">Senior Staff Engineer</div>
      <div className="role">Engineering Manager</div>
    </div>
    <div className="role-group">
      <div className="role">Principal Engineer</div>
      <div className="role">Engineering Director</div>
    </div>
    <style jsx>{styles}</style>
  </div>
);

export default RolesOverview;
