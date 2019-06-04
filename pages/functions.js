import SideNavLayout from '../components/SideNavLayout';
import FunctionNavigation from '../components/FunctionNavigation';
import FunctionsOverview from '../md/FunctionsOverview.mdx';

const Function = () => (
  <SideNavLayout>
    <SideNavLayout.Nav>
      <FunctionNavigation />
    </SideNavLayout.Nav>
    <SideNavLayout.Content>
      <FunctionsOverview />
    </SideNavLayout.Content>
  </SideNavLayout>
);

export default Function;
