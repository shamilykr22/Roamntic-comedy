import { css } from 'glamor';

import theme from '../themes';

export const contentWrapperStyle = css({
  position: 'fixed',
  top: theme.appBar.height,
  bottom: 0,
  left: theme.leftNav.width,
  right: 0,
  backgroundColor: theme.palette.canvasColor
});

export const leftNavStyle = css({
  top: theme.appBar.height,
  width: theme.leftNav.width,
  position: 'fixed'
});
export const style = theme.app;
