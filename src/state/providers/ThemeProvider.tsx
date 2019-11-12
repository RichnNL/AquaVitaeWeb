import React from 'react';
import createThemeStore from '../stores/Theme/ThemeStore';
import { useLocalStore, useObserver } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import ThemeContext from '../context/ThemeContext';

export interface IThemeProvider {
  children?: React.ReactNode | any; 
 }



export const ThemeToggleProvider: React.FC<IThemeProvider> = ({children}) => { 
  const themeStore = useLocalStore(createThemeStore);
  
  return  (
    <ThemeContext.Provider value={themeStore}>
        <ThemeToggleWrapper>
          {children}
        </ThemeToggleWrapper>
    </ThemeContext.Provider>
  
  )
}

const ThemeToggleWrapper: React.FC<IThemeProvider> = ({children}) => { 
  const themeStore = React.useContext(ThemeContext);
  if (!themeStore) throw Error("Store shouldn't be null");

  return useObserver(() => {   
     return <ThemeProvider theme={{theme: themeStore.theme, layout: themeStore.layout}}  >
              {children}
            </ThemeProvider>  
    });
}

export default ThemeToggleProvider;