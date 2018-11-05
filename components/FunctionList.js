import FUNCTIONS from '../constants/functions';

const FunctionList = () => (
  <div>
    {Object.keys(FUNCTIONS).map(functionKey => (
      <Function key={functionKey} functionKey={functionKey} />
    ))}
  </div>
);

const Function = (props) => {
  const { functionKey } = props;
  const func = FUNCTIONS[functionKey];

  return (
    <div>
      <h3>{func.title}</h3>
      <p>{func.description}</p>
      <ul>
        {func.behaviors.map(behavior => (
          <li key={behavior}>{behavior}</li>
        ))}
      </ul>
    </div>
  );
};

export default FunctionList;
