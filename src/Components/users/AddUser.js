import React,{useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

const AddUser = () =>{

	var history =useHistory();

const [user, setUser] = useState({
	name:"",
	username:"",
	email:"",
	phon:"",
	website:""
});
const{name,username,email,phone,website} = user;
const onInputChange = e =>{
	console.log(e.target.value)
	setUser({...user,[e.target.name]:e.target.value})
}
const onSubmit =async (e) =>{
	e.preventDefault()
	await axios.post("http://localhost:3001/users",user);
	history.push('/');
}
	return (
			<>
			<div className = "container">
				<div className = "py-4 col-md-8">
					<h1>Add User </h1>
					<form onSubmit={e=>onSubmit(e)}>
					  <div class="form-group">
					    <label for="name">Name</label>
					    <input 
					    	type="text" 
					    	name = "name"
					    	value={name}
					    	onChange={e=>onInputChange(e)}
					    	class="form-control form-control-lg" 
					    	placeholder="Enter name" />
					  </div>
					  <div class="form-group">
					    <label for="username">User Name</label>
					    <input 
					    	type="text"
					    	name="username"
					    	value={username}
					    	onChange={e=>onInputChange(e)}
					    	class="form-control form-control-lg" 
					    	placeholder="Enter username" />
					  </div>
					  <div class="form-group">
					    <label for="email">Email address</label>
					    <input 
					    	type="text" 
					    	name="email"
					    	value={email}
					    	onChange={e=>onInputChange(e)}
					    	class="form-control form-control-lg" 
					    	placeholder="Enter email" />
					  </div> 
					  <div class="form-group">
					    <label for="phone">Email phone</label>
					    <input 
					    	type="text"
					    	name="phone"
					    	value={phone}
					    	onChange={e=>onInputChange(e)}
					    	class="form-control form-control-lg" 
					    	placeholder="Enter phone" />
					  </div>
					  <div class="form-group">
					    <label for="website">Website</label>
					    <input 
					    	type="text"
					    	name="website"
					    	value={website}
					    	onChange={e=>onInputChange(e)}
					    	class="form-control form-control-lg" 
					    	placeholder="website" />
					  </div>
					  <button type="submit" class="btn btn-primary form-control form-control-lg">Submit</button>
					</form>
				</div>
			</div>
		</>
	)
}

export default AddUser; 