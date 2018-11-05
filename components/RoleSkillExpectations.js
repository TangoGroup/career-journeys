import styles from './RoleSkillExpectations.styles';
import { ROLE_EXPECTATIONS } from '../constants/expectations';
import ROLES from '../constants/roles';
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
        {expectations.inheritsBehaviorsFrom && <InheritedBehaviors inheritsBehaviorsFrom={expectations.inheritsBehaviorsFrom} skillKey={skillKey} />}
        {!expectations.inheritsBehaviorsFrom && <Behaviors behaviors={expectations.behaviors} />}
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

const InheritedBehaviors = (props) => {
  const { inheritsBehaviorsFrom, skillKey } = props;
  const inheritedExpectations = ROLE_EXPECTATIONS[inheritsBehaviorsFrom][skillKey];
  return (
    <div>
      <p>Inherits from <strong>{ROLES[inheritsBehaviorsFrom].title}</strong>:</p>
      <Behaviors behaviors={inheritedExpectations.behaviors} />
    </div>
  );
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
