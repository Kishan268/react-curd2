import React, {useState , useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Home =()=>{

	const [user, setUser] = useState();

	useEffect(()=>{
		loadUsers();
	},[]);

	const loadUsers = async() =>{

		const result = await axios.get("http://localhost:3001/users");
		setUser(result.data.reverse());
	}

	const deleUser = async id =>{
		const result = await axios.delete(`http://localhost:3001/users/${id}`);
		loadUsers();
	}
	return (
		<>
			<div className = "container">
				<div className = "py-4">
					<table class="table border shadow">
						  <thead class="thead-dark">
						    <tr>
						      <th scope="col">#</th>
						      <th scope="col">Name</th>
						      <th scope="col">User Name</th>
						      <th scope="col">Email</th>
						      <th scope="col">Action</th>
						    </tr>
						  </thead>
						  <tbody>
						   { user != null ? user.map((users,index) => (
					   		<tr>
						   		<td scope="row">{index+1}</td>
						   		<td>{users.name}</td>
						   		<td>{users.username}</td>
						   		<td>{users.email}</td>
						   		<td>
						   			<Link class= "btn btn-primary mr-2" to={`/user/show/${users.id}`}>View</Link>
						   			<Link class= "btn btn-outline-primary mr-2" to={`/user/edit/${users.id}`}>Edit</Link>
						   			<Link class= "btn btn-danger mr-2" onClick={()=>deleUser(users.id)}>Delete</Link>
						   		</td>
					   		</tr>
						   	)) : ''
						   }
						  </tbody>
						</table>

				</div>
			</div>
		</>
	)
}

export default Home;