import Link from 'next/link';
import styles from './Layout.styles';

const Layout = (props) => {
  const { children } = props;

  return (
    <div className="root">
      <div className="top-nav">
        <div className="top-nav-links">
          <Link href="/">Home</Link>
          <Link href="/roles">Roles</Link>
          <Link href="/skills">Skills</Link>
        </div>
      </div>
      {children}
      <style jsx>{styles}</style>
    </div>
  );
};

export default Layout;
