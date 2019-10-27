import React from 'react';
import {AuthenticationContext} from '../context/AuthenticationContext';

export const useAuthenticationStore = () => {
    const context = React.useContext(AuthenticationContext);
     if(!context) {
       throw Error("Cannot be null");
     } else {
       return context;
     }
   }