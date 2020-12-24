import React,{useState,useEffect} from "react";
import {useHistory , useParams} from "react-router-dom";
import axios from "axios";

const EditUser = () =>{

	//redirect page after add users
	const history =useHistory();

	//for the useparams use get id fron in url
	const {id} = useParams();

const [user, setUser] = useState({
	name:"",
	username:"",
	email:"",
	phon:"",
	website:""
});
//store all users data in  this array......
const{name,username,email,phone,website} = user;
const onInputChange = e =>{
	console.log(e.target.value)
	setUser({...user,[e.target.name]:e.target.value})
}

useEffect(()=>{
	loadUser();
},[]);

//send data for update
const onSubmit =async (e) =>{
	e.preventDefault()
	await axios.put(`http://localhost:3001/users/${id}`,user);
	history.push('/');
}

const loadUser = async () =>{
	const result = await axios.get(`http://localhost:3001/users/${id}`);
	//set data in input fields
	setUser(result.data);
}
	return (
			<>
			<div className = "container">
				<div className = "py-4 col-md-8 ">
					<h1>Edit User </h1>
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
					  <button type="submit" class="btn btn-warning form-control form-control-lg">Update</button>
					</form>
				</div>
			</div>
		</>
	)
}

export default EditUser; 