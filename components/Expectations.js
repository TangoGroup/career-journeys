import { ROLE_EXPECTATIONS } from '../data/expectations';
import ROLES from '../data/roles';

const Expectations = (props) => {
  const { expectations, skillKey } = props;
  return (
    <>
      {expectations.inheritsBehaviorsFrom && <InheritedBehaviors inheritsBehaviorsFrom={expectations.inheritsBehaviorsFrom} skillKey={skillKey} />}
      {!expectations.inheritsBehaviorsFrom && <Behaviors behaviors={expectations.behaviors} />}
    </>
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

export default Expectations;
