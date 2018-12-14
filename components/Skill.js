import SKILLS from '../data/skills';
import SkillRoleExpectations from './SkillRoleExpectations';

const Skill = (props) => {
  const { roles, skillKey, team } = props;
  const skill = SKILLS[skillKey];
  return (
    <div key={skillKey} className="hidden-anchor-root">
      <div className="hidden-anchor" id={`${team}_${skillKey}`} />
      <h3>{skill.name}</h3>
      <p>{skill.description}</p>
      {roles.map(role => (
        <SkillRoleExpectations key={role.key} role={role} skillKey={skillKey} />
      ))}
    </div>
  );
};

export default Skill;
