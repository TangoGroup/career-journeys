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
        <Expectations expectations={expectations} skillKey={skillKey} />
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

const Expectations = (props) => {
  const { expectations, skillKey } = props;
  if (expectations.inheritsBehaviorsFrom) {
    const inheritedExpectations = ROLE_EXPECTATIONS[expectations.inheritsBehaviorsFrom][skillKey];
    return (
      <div>
        <p>Inherits from {expectations.inheritsBehaviorsFrom}</p>
        <Behaviors behaviors={inheritedExpectations.behaviors} />
      </div>
    );
  }

  return <Behaviors behaviors={expectations.behaviors} />;
};

const Behaviors = (props) => {
  const { behaviors } = props;
  return (
    <ul>
      {behaviors.map(behavior => (
        <li key={behavior}>{behavior}</li>
      ))}
    </ul>
  );
};

export default RoleSkillExpectations;
