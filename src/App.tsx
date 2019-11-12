import React from 'react';
import './App.css';
import {ThemeToggleProvider} from './state/providers/ThemeProvider';
import MainPage from './pages/MainPage';
import AuthenticationProvider from './state/providers/AuthenticationProvider';
import { BrowserRouter as Router } from "react-router-dom";
import { LanguageProvider } from './state/stores/Language/index';



const App: React.FC = () => {
  return (
    <ThemeToggleProvider>
      <AuthenticationProvider>
        <LanguageProvider>
          <Router>
            <MainPage/>
          </Router>
        </LanguageProvider>
      </AuthenticationProvider>   
    </ThemeToggleProvider>
  );
}

export default App;
