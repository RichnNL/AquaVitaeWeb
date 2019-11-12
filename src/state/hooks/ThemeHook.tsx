import React from 'react';
import ThemeContext from '../context/ThemeContext';

const useThemeStore = () => {
    const context = React.useContext(ThemeContext);
     if(!context) {
       throw Error("Cannot be null");
     } else {
       return context;
     }
   }

   export default useThemeStore;