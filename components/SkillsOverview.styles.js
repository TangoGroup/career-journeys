import css from 'styled-jsx/css';

const styles = css`
  .root {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    justify-content: center;
  }

  .root > :global(*) {
    margin: 0 2.4rem 1.6rem 2.4rem;
  }
`;

export default styles;
