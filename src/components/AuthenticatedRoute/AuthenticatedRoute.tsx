import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useAuthenticationStore} from '../../state/stores/Authentication/index';
import { useObserver } from 'mobx-react';
import PATH from '../../constants/pathData';

interface Props {
    path: string | undefined;
    children: React.ReactNode | any; 
}

const AuthenticatedRoute: React.FC<Props> = ({ path, children }) => { 
    const authStore = useAuthenticationStore();
    const p = path ? path! : PATH.Landing;
    return useObserver(() => { 
        if(authStore.loggedIn) {
            return  <Route  path={p}> {children}   </Route>
        }  
        else {
            return <Redirect to={{ pathname: PATH.Landing }} />
        }
       });
}

export default AuthenticatedRoute;
  