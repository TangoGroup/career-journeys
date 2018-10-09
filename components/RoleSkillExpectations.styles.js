import css from 'styled-jsx/css';
import THEME from '../constants/theme';

const styles = css`
  .root {
    display: flex;
    margin: 2.4rem 0;
  }

  .heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-basis: 15%;
    background-color: ${THEME.colors.blue};
    padding: 2.4rem;
    color: #fff;
    font-size: 2rem;
    text-align: center;
  }

  .body {
    flex-grow: 1;
    background-color: #efefef;
    padding: 0.8rem 0.8rem 2.4rem 2.4rem;
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
