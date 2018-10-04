import css from 'styled-jsx/css';
import THEME from '../constants/theme';

const styles = css`
  .root {
    position: relative;
  }

  .hidden-anchor {
    visibility: hidden;
    position: absolute;
    top: ${THEME.anchorTopOffset};
  }
`;

export default styles;
