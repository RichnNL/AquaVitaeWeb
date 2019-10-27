import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react';
import HomePage from './Home/HomePage';
import { Switch, Route, useHistory} from "react-router-dom";
import LandingPage from './Landing/LandingPage';
import {useAuthenticationStore} from '../state/hooks/AuthenticationHook';
import AuthenticatedRoute from '../components/AuthenticatedRoute/AuthenticatedRoute';

interface Props  {

}


const  MainPage: React.FC<Props> = (props) => { 
  const authStore = useAuthenticationStore();
  const history = useHistory();
  useEffect(() => {
      history.push("/Home");
  }, [authStore.loggedIn]);
  
  return useObserver(() => {   
     return  <div>
                <Switch>
                    <AuthenticatedRoute path={process.env.REACT_APP_ROUTES_HOME}>
                      <HomePage/>
                    </AuthenticatedRoute>
                    <Route path={process.env.REACT_APP_ROUTES_LANDING}>
                      <LandingPage/>
                    </Route>
                  </Switch>
              </div>
    });
  }

  export default MainPage;