import React from 'react';
import { useObserver } from 'mobx-react';
import {Link} from "react-router-dom";
import { AVButton } from '../../components/Button/AVButton';
import PATH from '../../constants/pathData';
import { useAuthenticationStore } from '../../state/stores/Authentication';
import { useThemeStore } from '../../state/stores/Theme';
import { useLanguageStore } from '../../state/stores/Language';
interface Props  {
  
}



const  HomePage: React.FC<Props> = (props) => { 
  const authentication = useAuthenticationStore();
  const theme = useThemeStore();
  const language = useLanguageStore();

  const themeTest1 = () => {
    theme.toggleTheme();
  }

  const themeTest2 = () => {
    theme.toggleLayout();
  }

  const languageTest1 = () => {
    if(language.currentLang === 'en-US') {
      language.switchLang('es-ES');
    } else if(language.currentLang === 'es-ES') {
      language.switchLang('nl-NL');
    } else {
      language.switchLang('en-US');
    }
    
  }

  const authenticationTest1 = () => {
    authentication.logInFacebook();
  }

  const authenticationTest2 = () => {
    authentication.logInGoogle();
  }

  const authenticationTest3 = () => {
    authentication.logOut();
  }
  return useObserver(() => {   
     return <div>
                <Link to={PATH.Landing}>Splash</Link>
                <AVButton type='primary' btnSize='large' title={theme.theme} onClick={themeTest1}> </AVButton>
                <AVButton type='primary' btnSize='small' title={theme.layout} onClick={themeTest2}> </AVButton>
                <AVButton type='primary' btnSize='medium' title={language.textData.test.test} onClick={languageTest1}> </AVButton>
                <AVButton type='secondary' btnSize='large' title='facebook' onClick={authenticationTest1}> </AVButton>
                <AVButton type='secondary' btnSize='small' title='google' onClick={authenticationTest2}> </AVButton>
                <AVButton type='secondary' btnSize='medium' title= {String(authentication.loggedIn)} onClick={authenticationTest3}> </AVButton>
            </div>
    });
  
  }

  HomePage.defaultProps = {
    
  };

  export default HomePage;