import React from 'react';
import { useObserver } from 'mobx-react';
import {Link, useHistory} from "react-router-dom";
import { AVButton } from '../../components/Button/AVButton';
interface Props  {
  
}



const  LandingPage: React.FC<Props> = (props) => { 
  const history = useHistory();

  return useObserver(() => {   
    const clicked = ()=> {
      const location = process.env.REACT_APP_ROUTES_HOME!;
      history.push(location);
    }
     return <div>
        <Link to="/Home">Home</Link>
                <p>
                    
                </p>
                <button onClick={clicked}>
                {process.env.REACT_APP_ROUTES_HOME}
                </button>
                <AVButton></AVButton>
            </div>

    });
  
  }

  LandingPage.defaultProps = {
    
  };

  export default LandingPage;