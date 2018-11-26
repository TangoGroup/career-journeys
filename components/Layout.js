import Link from 'next/link';
import { withRouter } from 'next/router';
import styles from './Layout.styles';

const Layout = (props) => {
  const { children, router } = props;

  return (
    <div>
      <div className="top-nav">
        <div className="top-nav-links">
          <Link href="/"><a className={router.pathname === '/' ? 'active' : ''}>Home</a></Link>
          <Link href="/roles"><a className={router.pathname === '/roles' ? 'active' : ''}>Engineer Roles</a></Link>
          <Link href="/qa-roles"><a className={router.pathname === '/qa-roles' ? 'active' : ''}>QA Roles</a></Link>
          <Link href="/skills"><a className={router.pathname === '/skills' ? 'active' : ''}>Skills</a></Link>
        </div>
      </div>
      <div className="main">
        {children}
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default withRouter(Layout);
