import css from 'styled-jsx/css';

const styles = css`
  .root {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    justify-content: center;
  }

  .root > :global(*) {
    margin: 2.4rem;
  }
`;

export default styles;
