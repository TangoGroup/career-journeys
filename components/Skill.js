import ROLES from '../constants/roles';
import SKILLS from '../constants/skills';
import SkillRoleExpectations from './SkillRoleExpectations';

const Role = (props) => {
  const { skillKey } = props;
  const skill = SKILLS[skillKey];
  return (
    <div key={skillKey}>
      <h3>{skill.name}</h3>
      <p>{skill.description}</p>
      {Object.keys(ROLES).map(roleKey => (
        <SkillRoleExpectations key={roleKey} roleKey={roleKey} skillKey={skillKey} />
      ))}
    </div>
  );
};

export default Role;
