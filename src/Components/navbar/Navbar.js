import React from "react";
import {Link,NavLink} from "react-router-dom"; 
 const Navbar = ()=>{

 	return ( 
 		<>
 		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
		  <div classNameName="conatiner">
			 
			  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
		  		<NavLink className="navbar-brand" exact to="/">React User</NavLink>
			    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
			      <li className="nav-item">
			        <NavLink className="nav-link" exact to="/">Home </NavLink>
			      </li> 
			       <li className="nav-item">
			        <NavLink className="nav-link" exact to="/about">About </NavLink>
			      </li> 
			      <li className="nav-item">
			        <NavLink className="nav-link" exact to="/contact">Contact </NavLink>
			      </li>
			    </ul>
			  </div>
			  <Link className="btn btn-outline-light margin-left" to="/user/add">Add User </Link>
		  </div>
		</nav>
 		</>
 	)
 }

 export default Navbar;