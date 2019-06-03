import SideNavLayout from '../components/SideNavLayout';
import FunctionsOverview from '../md/FunctionsOverview.mdx';

const Function = () => (
  <SideNavLayout>
    <SideNavLayout.Nav>
    </SideNavLayout.Nav>
    <SideNavLayout.Content>
      <FunctionsOverview />
    </SideNavLayout.Content>
  </SideNavLayout>
);

export default Function;
