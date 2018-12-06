import styles from './SkillNavigation.styles';

const SkillNavigation = () => (
  <div>
    <div>
      <a href="#engineers" className="role-link">Engineers</a>
    </div>
    <div>
      <a href="#qa-engineers" className="role-link">QA Engineers</a>
    </div>
    <style jsx>{styles}</style>
  </div>
);

export default SkillNavigation;
