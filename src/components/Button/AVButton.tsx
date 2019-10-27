import React from 'react';
import StyledButton, {IStyledButton} from '../../styles/StyledButton';
import { useObserver } from 'mobx-react';
import {useHistory} from "react-router-dom";
import {useAuthenticationStore} from '../../state/hooks/AuthenticationHook';

interface Props extends IStyledButton {
  
}



export const  AVButton: React.FC<Props> = (props) => { 
  const history = useHistory();
  const authStore = useAuthenticationStore();
  const handleClick = () => {
    authStore.logInFacebook();
  }
  return useObserver(() => {   
     return <StyledButton  type={props.type} btnSize={props.btnSize} 
     onClick={handleClick}>
    
      Hello </StyledButton>
      

    });
  
  }

  AVButton.defaultProps = {
    type: 'primary',
    btnSize: 'medium'
  };