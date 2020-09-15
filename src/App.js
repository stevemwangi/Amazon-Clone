import React from 'react'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

import Header from './components/header/Header';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">   
      <Switch>
        <Route path="/" component={Header} />
        
      </Switch>
      </div>        
    </Router>
  );
}

export default App;
