import styles from './RoleSkillExpectations.styles';
import { ROLE_EXPECTATIONS } from '../data/expectations';
import SKILLS from '../data/skills';
import Expectations from './Expectations';
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
        <Expectations expectations={expectations} skillKey={skillKey} />
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default RoleSkillExpectations;
