import QARolesOverview from '../md/QARolesOverview.mdx';
import SideNavLayout from '../components/SideNavLayout';

const Roles = () => (
  <SideNavLayout>
    <SideNavLayout.Nav>
      <div>QA Role Navigation</div>
    </SideNavLayout.Nav>
    <SideNavLayout.Content>
      <QARolesOverview />
    </SideNavLayout.Content>
  </SideNavLayout>
);

export default Roles;
