import React, { useEffect } from 'react'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

import Header from './components/header/Header';
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout'; 
import Login from './components/login/Login'; 

import {auth} from './firebase'; 
import { useStateValue } from './StateProvider'; 

import './App.css';

function App() {
  const [{ basket, user},  dispatch] = useStateValue(); 
  /** A piece of code that runs based on a given condition */
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        /** User is logged in */
        dispatch({
          type: 'SET_USER',
          user: authUser 
        })
      } else {
        /** User is logged out */
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    return 
      (
        unsubscribe() 
      )
    
  }, [])

  console.log(user); 
  return (
    <Router>
      <div className="app">   
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />           
        </Route>     
      </Switch>
      </div>        
    </Router>
  );
}

export default App;
