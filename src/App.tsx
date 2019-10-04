import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ThemeProvider} from 'styled-components';
import {AVButton} from './components/Button/AVButton';



const App: React.FC = () => {
  return (
    <ThemeProvider theme={{ theme: 'light', layout: 'compact' }}>
       <AVButton></AVButton>
    </ThemeProvider>
    
  
  );
}

export default App;
