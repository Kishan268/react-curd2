import React,{ Component,useState } from 'react';
import './App.css';
import axios from 'axios';

import { Container,Row,FormGroup,FormControl,FormLabel,Button,Form,Navbar,Nav,NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

export default function App(){

	const [username,setUsername] = useState(null);
	const [email,setEmail] = useState(null);
	const [password,setPaword] = useState(null);
	
	const [employeeList,setEmployeeList] = useState(null);

	const addUser = (event) =>{
		event.preventDefault()

		axios.post('http://localhost:3000',{
			username:event.target.username.value,
			email:event.target.email.value,
			password:event.target.password.value
		}).then((res)=>{
			console.log(res)
		}).catch((error)=>{
			console.log(error)	
		})
		
	};
	const getEmployeeList = () =>{
		axios.get('http://localhost:3000/').then((res)=>{
			// console.log(res)
			setEmployeeList(res.data);
		}).catch((error)=>{
			console.log(error)	
		})
	};

	return (
		<div className="App">
			    <Router>
			        <nav class="navbar navbar-expand-lg navbar-light bg-light">
					  <a class="navbar-brand" href="/">Navbar</a>
					  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					    <span class="navbar-toggler-icon"></span>
					  </button>
					  <div class="collapse navbar-collapse" id="navbarNav">
					    <ul class="navbar-nav">
					      <li class="nav-item active">
					        <Link to="/">Home <span class="sr-only">(current)</span></Link>
					      </li>
					      <li class="nav-item">
					        < Link to="/user-register" href="user-register">Register</Link>
					      </li>
					      <li class="nav-item">
					        <Link to="/all-users">All Users</Link>
					      </li>
					    </ul>
					  </div>
					</nav>			

			        {/* A <Switch> looks through its children <Route>s and
			            renders the first one that matches the current URL. */}
			        <Switch>
			          <Route path="/user-register">
			            <Useregister />
			          </Route>
			          <Route path="/all-users">
			            <Users />
			          </Route>
			          <Route path="/">
			            <Home />
			          </Route>
			        </Switch>
			    </Router>
			</div>
		)

	
	function Home() {
		return <div className="container">
		  	<table class="table">
			  <thead>
			  <tr>
			      <th scope="col">#</th>
			      <th scope="col">Name</th>
			      <th scope="col">Email</th>
			      <th scope="col">Action</th>
			    </tr>
			  </thead>
			  <tbody>

				{employeeList != null ? employeeList.map((val,i)=>{
			   		return <tr key={i} >
				      <th scope="row">{val.id}</th>
				      <td>{val.username}</td>
				      <td>{val.email}</td>
				      <td><a href="" className="btn btn-success">Edit</a>||<a href="" className="btn btn-danger">Delete</a></td>
			    	</tr>
				}) : ''}

			  </tbody>
			</table> 
		</div>;
	}

	function Useregister() {
	    return <Form onSubmit={addUser}>
			<div className="row">
				<label>User Name</label>
				<input type="text" name="username" />
				<label>Email</label>
				<input type="text" nam1e="email" />
				<label>Password</label>
				<input type="password" name="password"/>
				<button className="btn btn-success" >submit</button>
			</div>
		</Form>;
	}

	function Users() { 
	    return <div className="container">
		  	<table class="table">
			  <thead>
			    <tr>
			      <th scope="col">#</th>
			      <th scope="col">Name</th>
			      <th scope="col">Email</th>
			      <th scope="col">Action</th>
			    </tr>
			  </thead>
			  <tbody>
				{employeeList != null ? employeeList.map((val,i)=>{
				    return <tr key={i} >
				      <th scope="row">{val.id}</th>
				      <td>{val.username}</td>
				      <td>{val.email}</td>
				      <td><a href="" className="btn btn-success">Edit</a>||<a href="" className="btn btn-danger">Delete</a></td>
				    </tr>
				}) : ''}
			  </tbody>
			</table>
		  <button className="btn btn-success" onClick={getEmployeeList}>Show data</button>
		  </div>
	}

}
// export default App;
