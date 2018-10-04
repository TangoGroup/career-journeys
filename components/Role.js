import ROLES from '../constants/roles';
import RoleSkillExpectations from './RoleSkillExpectations';

const Role = (props) => {
  const { roleKey } = props; // eslint-disable-line react/prop-types
  const role = ROLES[roleKey];
  return (
    <div key={roleKey} id={roleKey}>
      <h2>{role.title}</h2>
      <p>{role.description}</p>
      <h3>Skill Expectations</h3>
      <RoleSkillExpectations roleKey={roleKey} />
    </div>
  );
};

export default Role;
