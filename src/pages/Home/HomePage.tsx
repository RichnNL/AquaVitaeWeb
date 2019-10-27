import React from 'react';
import { useObserver } from 'mobx-react';
import { AVButton } from '../../components/Button/AVButton';
import {Link} from "react-router-dom";
interface Props  {
  
}



const  HomePage: React.FC<Props> = (props) => { 
  return useObserver(() => {   
     return <div>
                <Link to="/">Splash</Link>
                <p>
                {process.env.REACT_APP_ROUTES_LANDING}
                </p>
            </div>
    });
  
  }

  HomePage.defaultProps = {
    
  };

  export default HomePage;