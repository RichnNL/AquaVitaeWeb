import React from 'react';
import {IAuthenticationStore} from '../stores/AuthenticationStore';
export const AuthenticationContext = React.createContext<IAuthenticationStore | null>(null);