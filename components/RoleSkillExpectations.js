import { ROLE_EXPECTATIONS } from '../constants/expectations';
import SKILLS from '../constants/skills';

const RoleSkillExpectations = (props) => {
  const { roleKey } = props;

  const skillExpectations = ROLE_EXPECTATIONS[roleKey];

  if (!skillExpectations) return null;

  return (
    <div>
      {Object.keys(skillExpectations).map((skillKey) => {
        const skill = SKILLS[skillKey];
        const skillExpectation = skillExpectations[skillKey];

        return (
          <div key={skillKey}>
            <h3>{skill.name}</h3>
            <p>{skillExpectation.description}</p>
            <p>Example Behaviors:</p>
            <ul>
              {skillExpectation.exampleBehaviors.map(exampleBehavior => (
                <li key={exampleBehavior}>{exampleBehavior}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default RoleSkillExpectations;
