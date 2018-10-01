import { SKILL_EXPECTATIONS } from '../constants/expectations';
import ROLES from '../constants/roles';

const SkillRoleExpectations = (props) => {
  const { skillKey } = props;

  const roleExpectations = SKILL_EXPECTATIONS[skillKey];
  if (!roleExpectations) return null;

  return (
    <div>
      {Object.keys(roleExpectations).map((roleKey) => {
        const role = ROLES[roleKey];
        const skillExpectation = roleExpectations[roleKey];

        return (
          <div key={roleKey}>
            <h3>{role.title}</h3>
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

export default SkillRoleExpectations;
