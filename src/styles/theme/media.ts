import {css} from 'styled-components';

export interface ISizes  {
      desktop: number;
      tablet: number;
      mobile: number;
  }

export const Sizes: ISizes = {
    desktop: 992,
    tablet: 768,
    mobile: 576
  }

export interface IMedia {
    desktop?: any;
    tablet?: any;
    mobile?: any;
}  
export const media: IMedia = 
  Object
    .keys(Sizes)
    .reduce((acc, label) => {
       acc[label] = (any) => css`
        @media (max-width: ${Sizes[label] / 16}em) {
         ${css(any)}
        }
       `
 return acc
 }, {});
