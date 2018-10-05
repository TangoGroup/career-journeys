import RolesOverview from '../components/RolesOverview';
import RoleNavigation from '../components/RoleNavigation';
import RoleList from '../components/RoleList';
import SideNavLayout from '../components/SideNavLayout';

const Roles = () => (
  <SideNavLayout>
    <SideNavLayout.Nav>
      <RoleNavigation />
    </SideNavLayout.Nav>
    <SideNavLayout.Content>
      <h1>Roles</h1>
      <RolesOverview />
      <RoleList />
    </SideNavLayout.Content>
  </SideNavLayout>
);

export default Roles;
