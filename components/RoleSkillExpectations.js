import styles from './RoleSkillExpectations.styles';
import { ROLE_EXPECTATIONS } from '../constants/expectations';
import SKILLS from '../constants/skills';
import SkillIcon from './SkillIcon';

const RoleSkillExpectations = (props) => {
  const { roleKey, skillKey } = props;

  const expectations = ROLE_EXPECTATIONS[roleKey][skillKey];
  if (!expectations) return null;

  const skill = SKILLS[skillKey];

  return (
    <div className="root">
      <div className="heading">
        <div className="name">{skill.name}</div>
        <SkillIcon skillKey={skillKey} className="icon" />
      </div>
      <div className="body">
        <p>{expectations.description}</p>
        <p>Example Behaviors:</p>
        <ul>
          {expectations.exampleBehaviors.map(exampleBehavior => (
            <li key={exampleBehavior}>{exampleBehavior}</li>
          ))}
        </ul>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default RoleSkillExpectations;
