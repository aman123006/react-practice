import React, { Component } from 'react';
import { Provider  } from 'react-redux';
import { BrowserRouter as Router,  Route, } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import {LoginPage } from './pages/login'
import { LandingPage }  from './pages/landing'
import { store } from './Redux/store';
import Navigation  from './pages/navigation'
import * as routes from './routes';

import FirebaseObserver from './container/firebaseObserver';




class App extends Component {


  render() {
    return (
        <Provider store={store}>

              <Router>
                <div>
                  <Navigation />
<FirebaseObserver />



                  <Route
                    exact path={routes.SIGN_IN}
                    component={LoginPage}
                  />
                  <Route
                    exact path={routes.LANDING}
                    component={LandingPage}
                  />

                </div>

        </Router>
      </Provider>
    );
  }
}



export default App;
