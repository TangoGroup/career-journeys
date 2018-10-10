import styles from './SkillRoleExpectations.styles';
import { ROLE_EXPECTATIONS } from '../constants/expectations';
import ROLES from '../constants/roles';

const SkillRoleExpectations = (props) => {
  const { roleKey, skillKey } = props;

  const expectations = ROLE_EXPECTATIONS[roleKey][skillKey];
  if (!expectations) return null;

  const role = ROLES[roleKey];

  return (
    <div className="root">
      <div className="heading">
        <div className="title">{role.title}</div>
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

export default SkillRoleExpectations;
