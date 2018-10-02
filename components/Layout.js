import Link from 'next/link';
import styles from './Layout.styles';

const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      <div className="top-nav">
        <Link href="/">Home</Link>
        <Link href="/roles">Roles</Link>
        <Link href="/skills">Skills</Link>
      </div>
      {children}
      <style jsx>{styles}</style>
    </div>
  );
};

export default Layout;
