import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Components/pages/Home"; 
import About from "./Components/pages/About"; 
import Navbar from "./Components/navbar/Navbar";
import Contact from "./Components/pages/Contact"; 
import AddUser from "./Components/users/AddUser"; 
import EditUser from "./Components/users/EditUser"; 
import ShowUser from "./Components/users/ShowUser"; 
import PageNotFound from "./Components/pages/PageNotFound"; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

 const App = ()=>{
 	return (
 		<>
 		<Router>
	 		<div className="App">
	 			<Navbar />
	 			<Switch>
	 				<Route exact path="/" component={Home} />
	 				<Route exact path="/about" component={About} />
	 				<Route exact path="/contact" component={Contact} />
	 				<Route exact path="/user/add" component={AddUser} />
	 				<Route exact path="/user/edit/:id" component={EditUser} />
	 				<Route exact path="/user/show/:id" component={ShowUser} />
	 				<Route component={PageNotFound} />
	 			</Switch>
	 		</div>
 		</Router>
 		</>
 	);
 } 

 export default App;