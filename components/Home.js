import styles from './Home.styles';

const Home = () => (
  <div className="root">
    <h1>Career Journeys</h1>
    <p>
      At Gloo we believe that every person is on a journey of growth within their life. This journey is multi-faceted and spans every aspect of life.
    </p>
    <p>
      This is at the core of what Gloo is about and, as such, we are called to ensure that we are supporting every employee on their personal and
      professional growth journey.
    </p>
    <p>
      This document should serve as your guide as you approach professional, career and personal growth as part of the Gloo engineering team.
      It not only serves as a framework that you may apply to your whole career, but also will give you a practical understanding of how to progress
      here at Gloo and how your progression will affect your compensation, title and the expectations that your team will have of you.
    </p>
    <p>
      It is important that we treat this framework as a guide, not a rulebook or checklist.  We should take a common sense approach and use this to
      enable meaningful conversations between you and your manager.
    </p>

    <h2>Purpose</h2>
    <p>The purpose of the career journey framework is to:</p>
    <ul>
      <li>Be <strong>supportive</strong> of your career journey.</li>
      <li>Encourage <strong>alignment</strong> between your career journey with Gloo’s aspirations.</li>
      <li>Provide <strong>clarity</strong> between roles and responsibilities.</li>
      <li>Help <strong>attract and retain</strong> great new talent to Gloo.</li>
    </ul>

    <h2>Promises of the Framework</h2>
    <ul>
      <li>Progression will be measured across a <strong>diverse set of contributions</strong>.</li>
      <li>Generates <strong>awareness of yourself</strong> and your impact on others.</li>
      <li>Provide a <strong>clear structure</strong> of what is expected at varying roles.</li>
      <li>Establishes a clear connection between your <strong>role and compensation</strong>.</li>
      <li>Enables <strong>meaningful conversations</strong> between you and your manager about your career journey.</li>
    </ul>

    <h2>Cadence</h2>
    <p><strong>Annual review:</strong> 1 yearly review to adjust compensation and role (typically February)*.</p>
    <p><strong>Career sprints:</strong> every 6 weeks, meet with your manager to set goals, direction, focus and growth
      (<a target="_blank" rel="noopener noreferrer" href="https://www.forbes.com/sites/workday/2018/08/24/career-sprints-using-agile-development-methods-to-foster-employee-development/#55aadfb355eb">inspired by Workday</a>)
    </p>
    <p>
      * There may be special circumstances when a manager can recommend a role change outside of the standard cadence based on exceptional
      contribution.
    </p>
    <style jsx>{styles}</style>
  </div>
);

export default Home;
