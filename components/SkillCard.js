import styles from './SkillCard.styles';

const SkillCard = () => (
  <div>
    <div className="heading">
      <div className="title">Technical Excellence</div>
    </div>
    <div className="body">
      <ul>
        <li>iOS</li>
        <li>Android</li>
        <li>Web</li>
        <li>Platform</li>
        <li>Devops</li>
        <li>Test Automation</li>
      </ul>
    </div>
    <style jsx>{styles}</style>
  </div>
);

export default SkillCard;
