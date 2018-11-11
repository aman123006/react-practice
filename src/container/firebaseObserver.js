import React, { Component } from 'react';
import { connect } from 'react-redux';

import {userActions } from '../Redux/actions';
import { auth } from '../firebase';

class FirebaseObserver extends Component {

    componentDidMount() {
    auth.observe(this.props.dispatch,userActions);
  }

  xyz(){console.log(auth.getEmailVerified().emailVerified)}

 render() {
   return null;
   
 }


}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    };
}

FirebaseObserver =  connect(mapStateToProps)(FirebaseObserver);
export default FirebaseObserver;
