import React from 'react';
import { AuthenticationStore } from '../stores/AuthenticationStore';
import {AuthenticationContext} from '../context/AuthenticationContext';
import  Firebase  from "../../services/Firebase/Firebase";



export interface IAuthenticationProvider {
  children?: React.ReactNode | any; 
}

export const AuthenticationProvider: React.FC<IAuthenticationProvider> = ({children}) => { 
  const authenticationStore = new AuthenticationStore(Firebase);
  
  return  (
    <AuthenticationContext.Provider value={authenticationStore}>
          {children}
    </AuthenticationContext.Provider>
  
  )
}

export default AuthenticationProvider;