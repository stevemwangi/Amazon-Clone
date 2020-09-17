import React from 'react'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

import Header from './components/header/Header';
import Home from './components/home/Home';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">   
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route path="/login">
          <h1>Login Page</h1>
        </Route>
        <Route path="/checkout">
          <Header />
          <h1>Checkout page</h1>
        </Route>     
      </Switch>
      </div>        
    </Router>
  );
}

export default App;
