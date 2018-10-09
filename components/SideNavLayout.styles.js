import css from 'styled-jsx/css';
import THEME from '../constants/theme';

export const contentStyles = css`
  padding-left: ${THEME.contentContainerPadding};
  padding-right: 2.4rem;

  @media screen and (max-width: ${THEME.mediaQueryMaxWidth}) {
    padding-left: 0;
    padding-right: 0;
  }
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

  @media screen and (max-width: ${THEME.mediaQueryMaxWidth}) {
    display: none;
  }
`;
