import React from 'react';
import StyledButton, {IStyledButton} from '../../styles/StyledButton';
import {ThemeContext} from '../../providers/ThemeProvider';
import { useObserver } from 'mobx-react';
interface Props extends IStyledButton {
  
}



export const  AVButton: React.FC<Props> = (props) => { 

  const themeStore = React.useContext(ThemeContext);
  if (!themeStore) throw Error("Store shouldn't be null");

  const handleClick = () => {
    themeStore.toggleTheme();
  }
  return useObserver(() => {   
     return <StyledButton type={props.type} btnSize={props.btnSize} 
     onClick={handleClick}>
    
      {themeStore.theme} </StyledButton>

    });
  
  }

  AVButton.defaultProps = {
    type: 'primary',
    btnSize: 'medium'
  };