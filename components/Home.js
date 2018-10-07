import styles from './Home.styles';

const Home = () => (
  <div className="root">
    <h1>Career Journeys</h1>
    <p>A brief introduction to the framework.</p>

    <h2>Purpose</h2>
    <p>The purpose of the career journey framework is...</p>

    <h2>Promises</h2>
    <ul>
      <li>Progression will be measured across a diverse set of contributions</li>
      <li>You will grow in awareness of yourself and your impact on others</li>
      <li>Provide a clear structure of what is expected at varying roles</li>
      <li>Provide a clear connection between your role and compensation</li>
      <li>Enable meaningful conversations between you and your manager about your career journey</li>
    </ul>

    <h2>Cadence</h2>
    <p>Add cadence details here</p>

    <h2>Engineering Values</h2>
    <ul>
      <li>Commitment to Excellence</li>
      <li>Be a Great Teammate</li>
      <li>Alignment</li>
      <li>Execute / Action Bias</li>
      <li>Committed to Growth</li>
    </ul>
    <style jsx>{styles}</style>
  </div>
);

export default Home;
