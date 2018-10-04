import styles from './Role.styles';
import ROLES from '../constants/roles';
import RoleSkillExpectations from './RoleSkillExpectations';

const Role = (props) => {
  const { roleKey } = props; // eslint-disable-line react/prop-types
  const role = ROLES[roleKey];
  return (
    <div className="root">
      <div id={roleKey} className="hidden-anchor" />
      <h2>{role.title}</h2>
      <p>{role.description}</p>
      <h3>Skill Expectations</h3>
      <RoleSkillExpectations roleKey={roleKey} />
      <style jsx>{styles}</style>
    </div>
  );
};

export default Role;
