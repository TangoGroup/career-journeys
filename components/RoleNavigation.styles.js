import css from 'styled-jsx/css';
import THEME from '../constants/theme';

const styles = css`
  .root {
    position: fixed;
    left: 0;
    top: ${THEME.topNavHeight};
    bottom: 0;
    width: ${THEME.leftNavWidth};
    background-color: #efefef;
  }
`;

export default styles;
