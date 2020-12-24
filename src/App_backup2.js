import React,{useState} from "react";

const App = ()=>{


//Bg change................
	/*const purpal = "#8e44ad";
    const [bg,setBg] = useState(purpal);
    const [name,setName] = useState('Click')
	const bgChange = () =>{
		console.log('Click');
		let neBg = "#34495e";
		setBg(neBg);
		setName('Ouch:wow');
	}
	return (
		<>
			<div style={{backgroundColor:bg}}>
				<button onClick={bgChange}> {name}</button>
			</div>
		</>
	)*/
//Events ..................
	/*const [name , setName] = useState();
	const [fullname , setFullName] = useState();
	const inputEvent = (event)=>{
		// console.log(event.target.value)
		setName(event.target.value);
	}
	const submitData = () =>{

		setFullName(name);

	}
	return (
		<>
		<div>
			<h1>Hello {fullname}</h1>
			<input type="text" placeholder="Enter your name" onChange={inputEvent} value={name}/><br/>
			<button onClick={submitData}>Click Me</button>
		</div>
		</>
	)*/
//Form submite ..................
// const [username,setUserName] = useState("");
// const [username1,setUserName1] = useState("");

// const [password,setPassword] = useState("");
// const [password1,setPassword1] = useState("");

// const inputeUsername = (event) =>{
// 	setUserName(event.target.value);
// }
// const inputePassword = (event) =>{
// 	setPassword(event.target.value);
// }
// const onSubmit= (e)=>{
// 	e.preventDefault();
// 	setUserName1(username)
// 	setPassword1(password)
// 	console.log('submit');
// }
// 	return(
// 		<>
// 			<div>
// 			<h1>Hello UserName: {username1} password {password1} </h1> 
// 				<form onSubmit={onSubmit}>
// 				<leble>User Name</leble>
// 				<input type="text" placeholder="Enter username" value={username} onChange={inputeUsername}/>
// 				<leble>Password</leble>
// 				<input type="text" placeholder="Enter password" value={password} onChange={inputePassword}/>
// 				<button type="submit"> submit</button>
// 				</form>
// 			</div>
// 		</>
// 	)						


// Multple Form input field handel using name attribut submite ..................
	const [fullName,setfullName] = useState({
		fname: '',
		lname: '',
		email: '',
		mobile: '',
	});
	const inputEvent = (event) =>{
		console.log(event.target.value)
		console.log(event.target.name)
		// const value = event.target.value;
		// const name = event.target.name;

	//object destuting..............
	const {value,name} = event.target;
	//END object destuting..............

		setfullName((preValue)=>{

			console.log(preValue)
			/*if (name === 'fname') {
				return{
					fname: value,
					lname: preValue.lname,
					email: preValue.email,
					mobile: preValue.mobile,
				};
				
			}else if (name === 'lname') {
				return{
					fname: preValue.fname,
					lname: value,
					email: preValue.email,
					mobile: preValue.mobile,
				};
			}else if (name === 'email') {
				return{
					fname: preValue.fname,
					lname: preValue.lname,
					email: value,
					mobile: preValue.mobile,
				};;
			}else if (name === 'mobile') {
				return{
					fname: preValue.fname,
					lname: preValue.lname,
					email: preValue.lname,
					mobile: value
				};;
			}*/

		//submit  form spread opratore  three dots..............
		return{
			...preValue,
			[name]:value,
		}

		})
	}
	const onSubmit = (e) =>{
		e.preventDefault();
		alert('form submitted')
	}
	return(
		<>
			<div>
				<h1>Hello First Name: {fullName.fname} Last Name: {fullName.lname} Email: {fullName.email} Mobile: {fullName.mobile} </h1>
				<form onSubmit={onSubmit} >
					<leble>First Name</leble>
					<input type="text" placeholder="Enter first name" name="fname" onChange={inputEvent} value={fullName.fname} /><br />
					<leble>Last Name</leble>
					<input type="text" placeholder="Enter last name" name="lname" onChange={inputEvent} value={fullName.lname} /><br />
					<leble>Email</leble>
					<input type="text" placeholder="Enter email address" name="email" onChange={inputEvent} value={fullName.email} /><br />
					<leble>Mobile No</leble>
					<input type="text" placeholder="Enter mobile no" name="mobile" onChange={inputEvent} value={fullName.mobile} /><br />
					<button type="submit" >Submit</button><br />
				</form>	
			</div>
		</>
	)

}

export default App;