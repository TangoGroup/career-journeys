import styles from './SkillRoleExpectations.styles';
import { ROLE_EXPECTATIONS } from '../data/expectations';
import ROLES from '../data/roles';

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
        <ul>
          {expectations.behaviors.map(behavior => (
            <li key={behavior}>{behavior}</li>
          ))}
        </ul>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default SkillRoleExpectations;
