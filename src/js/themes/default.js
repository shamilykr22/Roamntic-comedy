import { css } from 'glamor';

const headerBackgroundColor = '#FFFFFF';
const canvasColor = '#F5F5F5';
const fontFamily = 'lato';
const fontColor = '#000000';
const navItemBGColor = 'rgba(0, 181, 234, 0.04)';
const navItemBorderColor = '#00b5ea';
const bodyHeight = '100vh';

css.fontFace({
  fontFamily: 'lato',
  fontStyle: 'normal',
  fontWeight: 100,
  src: 'url("/assets/fonts/lato/Lato-Hairline.ttf")'
});
css.fontFace({
  fontFamily: 'lato',
  fontStyle: 'normal',
  fontWeight: 400,
  src: 'url("/assets/fonts/lato/Lato-Regular.ttf")'
});
css.fontFace({
  fontFamily: 'lato',
  fontStyle: 'normal',
  fontWeight: 700,
  src: 'url("/assets/fonts/lato/Lato-Bold.ttf")'
});
css.fontFace({
  fontFamily: 'lato',
  fontStyle: 'normal',
  fontWeight: 800,
  src: 'url("/assets/fonts/lato/Lato-Black.ttf")'
});
css.fontFace({
  fontFamily: 'lato',
  fontStyle: 'italic',
  fontWeight: 100,
  src: 'url("/assets/fonts/lato/Lato-HairlineItalic.ttf")'
});
css.fontFace({
  fontFamily: 'lato',
  fontStyle: 'italic',
  fontWeight: 200,
  src: 'url("/assets/fonts/lato/Lato-LightItalic.ttf")'
});
css.fontFace({
  fontFamily: 'lato',
  fontStyle: 'italic',
  fontWeight: 400,
  src: 'url("/assets/fonts/lato/Lato-Italic.ttf")'
});
css.fontFace({
  fontFamily: 'lato',
  fontStyle: 'italic',
  fontWeight: 700,
  src: 'url("/assets/fonts/lato/Lato-BoldItalic.ttf")'
});
css.fontFace({
  fontFamily: 'lato',
  fontStyle: 'italic',
  fontWeight: 800,
  src: 'url("/assets/fonts/lato/Lato-BlackItalic.ttf")'
});

// since most if not the whole product is using lato, let us set it for the body
css.global('body', { fontFamily, height: bodyHeight });

/**
 *  Default theme for test Accountant GST UI. Only customizations from
 *  the default theme should be specified here
 */
export default {
  fontFamily,
  fontColor,
  palette: {
    textColor: fontColor,
    passedColor: headerBackgroundColor,
    canvasColor
  },
  navItem: {
    navItemBackgroundColor: navItemBGColor,
    NavItemSelectedBorderColor: navItemBorderColor
  },
  leftNav: {
    width: 0
  },
  appBar: {
    height: 100
  }
};
