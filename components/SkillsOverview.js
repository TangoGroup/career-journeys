import styles from './SkillsOverview.styles';
import SkillCard from './SkillCard';

const SkillsOverview = () => (
  <div className="root">
    <SkillCard />
    <SkillCard />
    <SkillCard />
    <SkillCard />
    <style jsx>{styles}</style>
  </div>
);

export default SkillsOverview;
