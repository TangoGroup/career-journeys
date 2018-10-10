import ROLES from '../constants/roles';
import SKILLS from '../constants/skills';
import SkillRoleExpectations from './SkillRoleExpectations';

const Role = (props) => {
  const { skillKey } = props;
  const skill = SKILLS[skillKey];
  return (
    <div key={skillKey}>
      <h2>{skill.name}</h2>
      <p>{skill.description}</p>
      {Object.keys(ROLES).map(roleKey => (
        <SkillRoleExpectations roleKey={roleKey} skillKey={skillKey} />
      ))}
    </div>
  );
};

export default Role;
