import React from 'react';
import {ThemeContext} from '../context/ThemeContext';

export const useThemeStore = () => {
    const context = React.useContext(ThemeContext);
     if(!context) {
       throw Error("Cannot be null");
     } else {
       return context;
     }
   }