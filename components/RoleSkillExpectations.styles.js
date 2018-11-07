import css from 'styled-jsx/css';
import THEME from '../lib/theme';

const styles = css`
  .root {
    display: grid;
    grid-template-columns: 2fr 8fr;
    margin: 2.4rem 0;
  }

  .heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${THEME.colors.blue};
    padding: 2.4rem;
    color: #fff;
    font-size: 2rem;
    text-align: center;
  }

  .body {
    background-color: #efefef;
    padding: 2.4rem;
  }

  .body ul {
    margin: 0;
    padding-left: 2.4rem;
  }

  :global(.icon) {
    width: 25%;
    margin: 1.6rem auto 0 auto;
  }
`;

export default styles;
