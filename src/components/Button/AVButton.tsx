import React from 'react';
import StyledButton, {IStyledButton} from '../../styles/StyledButton';
import { useObserver } from 'mobx-react';

interface Props extends IStyledButton {
  onClick: ()=> void,
  title: string,
}



export const  AVButton: React.FC<Props> = (props) => { 
 
  return useObserver(() => {   
     return <StyledButton  type={props.type} btnSize={props.btnSize} 
     onClick={props.onClick}>
    
      {props.title} </StyledButton>
      

    });
  
  }

  AVButton.defaultProps = {
    type: 'primary',
    btnSize: 'medium'
  };