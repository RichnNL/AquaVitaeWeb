import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useAuthenticationStore} from '../../state/hooks/AuthenticationHook';
import { useObserver } from 'mobx-react';

interface Props {
    path: string | undefined;
    children: React.ReactNode | any; 
}

const AuthenticatedRoute: React.FC<Props> = ({ path, children }) => { 
    const authStore = useAuthenticationStore();
    const p = path ? path! : "/";
    return useObserver(() => { 
        if(authStore.loggedIn) {
            return  <Route  path={p}> {children}   </Route>
        }  
        else {
            return <Redirect to={{ pathname: "/"}} />
        }
       });
}

export default AuthenticatedRoute;
  