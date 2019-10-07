import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ThemeToggleProvider} from './providers/ThemeProvider';
import {AVButton} from './components/Button/AVButton';



const App: React.FC = () => {
  return (
    <ThemeToggleProvider>
       <AVButton > Hello World</AVButton>
    </ThemeToggleProvider>
      

  
  );
}

export default App;
