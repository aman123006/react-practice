import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../routes';

const Navigation = () =>

    <nav className="navbar navbar-default">
  <div className="container-fluid">

    <div className="navbar-header">
     <Link to={routes.LANDING} className="navbar-brand">Home</Link>
    </div>

   
      <ul className="nav navbar-nav">
       {
         //<li className="active"> <Link to={routes.SIGN_IN} className="navbar-brand">Home</Link></li>
        //<li> <Link to={routes.SIGN_IN} className="navbar-brand">Home</Link></li>
        
       }
      </ul>
      
      <ul className="nav navbar-nav navbar-right">
        <li> <Link to={routes.SIGN_IN} className="navbar-brand">Login</Link></li>
          </ul>
    </div>

</nav>
  

export default Navigation;
