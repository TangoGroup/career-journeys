import css from 'styled-jsx/css';

const styles = css`
  a.role-link, .skill-links a {
    display: inline-block;
    width: 100%;
    padding: 0.8rem 0;
    text-decoration: none;
    color: #333;
  }

  a.role-link:hover, .skill-links a:hover {
    color: #999;
  }

  .skill-links a {
    font-size: 1.6rem;
    padding: 0.4rem 1rem;
  }
`;

export default styles;
