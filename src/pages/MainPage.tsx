import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react';
import HomePage from './Home/HomePage';
import { Switch, Route, useHistory} from "react-router-dom";
import LandingPage from './Landing/LandingPage';
import {useAuthenticationStore} from '../state/stores/Authentication/index';
import AuthenticatedRoute from '../components/AuthenticatedRoute/AuthenticatedRoute';
import {PATH} from '../constants/pathData';

interface Props  {

}


const  MainPage: React.FC<Props> = (props) => { 
  const authStore = useAuthenticationStore();
  const history = useHistory();
  useEffect(() => {
    if(!authStore.loggedIn) {
      history.push(PATH.Landing);
    }
  }, [authStore.loggedIn, history]);
  
  return useObserver(() => {   
     return  <div>
                <Switch>
                    <AuthenticatedRoute path={PATH.Home}>
                      <HomePage/>
                    </AuthenticatedRoute>
                    <Route path={PATH.Landing}>
                      <LandingPage/>
                    </Route>
                </Switch>
              </div>
    });
  }

  export default MainPage;