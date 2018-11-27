import SKILLS from '../data/skills';
import SkillRoleExpectations from './SkillRoleExpectations';

const Skill = (props) => {
  const { roles, skillKey } = props;
  const skill = SKILLS[skillKey];
  return (
    <div key={skillKey}>
      <h3>{skill.name}</h3>
      <p>{skill.description}</p>
      {roles.map(role => (
        <SkillRoleExpectations key={role.key} role={role} skillKey={skillKey} />
      ))}
    </div>
  );
};

export default Skill;
