import SkillsOverview from '../md/SkillsOverview.mdx';
import SideNavLayout from '../components/SideNavLayout';
import SkillNavigation from '../components/SkillNavigation';

const Skills = () => (
  <SideNavLayout>
    <SideNavLayout.Nav>
      <SkillNavigation />
    </SideNavLayout.Nav>
    <SideNavLayout.Content>
      <SkillsOverview />
    </SideNavLayout.Content>
  </SideNavLayout>
);

export default Skills;
