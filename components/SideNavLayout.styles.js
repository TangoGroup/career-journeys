import css from 'styled-jsx/css';
import THEME from '../constants/theme';

export const contentStyles = css`
  padding-left: ${THEME.contentContainerPadding};
  padding-top: ${THEME.topNavHeight};
`;

export const navStyles = css`
  position: fixed;
  left: 0;
  top: ${THEME.topNavHeight};
  bottom: 0;
  width: ${THEME.leftNavWidth};
  padding: 0.8rem 1.6rem;
  background-color: #efefef;
  font-size: 1.8rem;
`;
