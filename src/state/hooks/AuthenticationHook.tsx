import React from 'react';
import AuthenticationContext from '../context/AuthenticationContext';

const useAuthenticationStore = () => {
    const context = React.useContext(AuthenticationContext);
     if(!context) {
       throw Error("Cannot be null");
     } else {
       return context;
     }
   }

export default useAuthenticationStore;