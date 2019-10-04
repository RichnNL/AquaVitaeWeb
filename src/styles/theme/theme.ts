import theme from 'styled-theming';
import {Colors} from './colors';
import * as React from 'react';

export const backgroundColor = theme.variants('theme', 'type', {
    primary: {light: Colors.primary.default },
    secondary: {light: Colors.primary.light }
  });

export const backgroundColorHover = theme.variants('theme', 'type', {
    primary: {light: Colors.secondary.default },
    secondary: {light: Colors.primary.dark }
  });
  
export const backgroundColorshadow = theme.variants('theme', 'type', {
  primary: {light: Colors.secondary.light },
  secondary: {light: Colors.primary.dark }
});

export const borderColor = theme.variants('theme', 'type', {
  primary: {light: Colors.secondary.default },
  secondary: {light: Colors.primary.light }
});
  


  export const textColor = theme.variants('theme', 'type', {
  primary: {light: Colors.text.default },
  secondary: {light: Colors.text.light }
});

export const headerFont = theme.variants('theme', 'type', {
  primary: {light: 'Celtic' },
  secondary: {light: Colors.text.light }
});

export const textFont = theme.variants('theme', 'type', {
  primary: {light: 'OpenSans' },
  secondary: {light: 'OpenSans' }
});

export const textItalicFont = theme.variants('theme', 'type', {
  primary: {light: 'OpenSans_Italic' },
  secondary: {light: 'OpenSans_Italic' }
});

export const textBoldFont = theme.variants('theme', 'type', {
  primary: {light: 'OpenSans_Bold' },
  secondary: {light: 'OpenSans_Bold' }
});

export const textLightFont = theme.variants('theme', 'type', {
  primary: {light: 'OpenSans_Light' },
  secondary: {light: 'OpenSans_Light' }
});

export const buttonFontSize = theme.variants('layout', 'size', {
  small: { compact: '10px', cozy: '15px' },
  medium: { compact: '20px', cozy: '25px' },
  large: { compact: '30px', cozy: '35px' },
});



export interface ITheme {
 children?: React.ReactNode, 
}




 