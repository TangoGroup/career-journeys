import styles from './SkillRoleExpectations.styles';
import { ROLE_EXPECTATIONS } from '../data/expectations';
import Expectations from './Expectations';

const SkillRoleExpectations = (props) => {
  const { role, skillKey } = props;

  const expectations = ROLE_EXPECTATIONS[role.key][skillKey];
  if (!expectations) return null;

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
