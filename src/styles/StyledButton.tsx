import styled from 'styled-components';
import * as Theme from './theme/theme';
import {Sizes} from './theme/media';
import styledComponentsTS from 'styled-components-ts';
import styledComponents from 'styled-components'

export interface IStyledButton extends Theme.ITheme {
  type?: 'primary' | 'secondary';
  btnSize?: 'small' | 'medium' | 'large';
}

const StyledButton = styledComponentsTS<IStyledButton>(styledComponents.button)`
background-color: ${Theme.backgroundColorshadow};
-webkit-border-radius: 20px;
-moz-border-radius: 20px;
border-radius: 20px;
color: ${Theme.textColor};
font-family: ${Theme.headerFont}  ;
font-size: ${Theme.buttonFontSize};
font-weight: 100;
padding: 40px;
box-shadow: 1px 1px 20px 0px #000000;
-webkit-box-shadow: 1px 1px 20px 0px #000000;
-moz-box-shadow: 1px 1px 20px 0px #000000;
text-shadow: 1px 1px 20px #000000;
border: solid ${Theme.borderColor} 1px;
text-decoration: none;
display: inline-block;
cursor: pointer;
@media screen and (max-width: ${Sizes.desktop}px) {
    background-color: ${Theme.backgroundColor};
};
@media screen and (max-width: ${Sizes.tablet}px) {
  background-color: ${Theme.backgroundColorHover};
};
@media screen and (max-width: ${Sizes.mobile}px) {
  background-color: ${Theme.backgroundColorshadow};
};

&:hover  {
  background-color: ${Theme.backgroundColorHover};
}

`;


export default StyledButton;


  
 
