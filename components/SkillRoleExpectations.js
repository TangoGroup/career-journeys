import styles from './SkillRoleExpectations.styles';
import { ROLE_EXPECTATIONS } from '../data/expectations';
import ROLES from '../data/roles';
import Expectations from './Expectations';

const SkillRoleExpectations = (props) => {
  const { roleKey, skillKey } = props;

  console.log('roleKey', roleKey);
  console.log('skillKey', skillKey);
  const expectations = ROLE_EXPECTATIONS[roleKey][skillKey];
  if (!expectations) return null;

  const role = ROLES[roleKey];

  return (
    <div className="root">
      <div className="heading">
        <div className="title">{role.title}</div>
      </div>
      <div className="body">
        <Expectations expectations={expectations} skillKey={skillKey} />
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default SkillRoleExpectations;
