import React from 'react';
import './App.css';
import {ThemeToggleProvider} from './state/providers/ThemeProvider';
import MainPage from './pages/MainPage';
import AuthenticationProvider from './state/providers/AuthenticationProvider';
import { BrowserRouter as Router } from "react-router-dom";



const App: React.FC = () => {
  return (
    <ThemeToggleProvider>
      <AuthenticationProvider>
        <Router>
          <MainPage/>
        </Router>
      </AuthenticationProvider>   
    </ThemeToggleProvider>
  );
}

export default App;
