import React from 'react';
import { Link } from 'react-router-dom';
// import {browserHistory } from "react-router";
import { connect } from 'react-redux';
import {userActions } from './../../Redux/actions';
import { auth } from '../../firebase';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
      this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
}

handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;

    auth.doSignInWithEmailAndPassword(username, password)
      .then(() => {
        console.log("Sucess");

        //  console.log(user1);
          dispatch(userActions.login(username, password));
          window.open("/landing","_self");
      })
      .catch(error => {
      console.log(error);
      });

}



    render() {
        const { user } = this.props;
        const { username, password, } = this.state;
        return (
<div>
<div id="LoginForm" >
<h1 className="form-heading">login Form</h1>
<div className="login-form">
<div className="main-div">
    <div className="panel">
   <h2>Login</h2>
   <p>Please enter your email and password</p>
   </div>
    <form id="Login" onSubmit={this.handleSubmit}>

        <div className="form-group">


            <input type="email" name="username" className="form-control" id="inputEmail" placeholder="Email Address" value={username} onChange={this.handleChange} />

        </div>

        <div className="form-group">

            <input type="password" name="password" className="form-control" id="inputPassword" placeholder="Password" value={password} onChange={this.handleChange} />

        </div>
        <div className="forgot">
        <a href="reset.html">Forgot password?</a>
</div>
        <button type="submit" className="btn btn-primary">Login</button>

    </form>
    </div>

</div>

        </div>

      </div>



        );
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
