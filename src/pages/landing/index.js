import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {userActions } from './../../Redux/actions';
import { auth } from '../../firebase';
import firebase from 'firebase/app';

class LandingPage extends Component {


  render() {

    const { user } = this.props;
    return (
      <div>
      { user.emailVerified ?null:<p>Please verify email</p>}

      <h1> LANDING PAGE </h1></div>
    );
  }
}


function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    };
}

const connectedLandingPage = connect(mapStateToProps)(LandingPage);
export  { connectedLandingPage as LandingPage };
