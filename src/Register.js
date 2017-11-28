import React, { Component } from 'react';
import { Button, Segment, Form } from 'semantic-ui-react';



class Register extends Component {

/*validation()
	  {

	  	var userName = document.getElementById("userName").value;
	  	var firstName = document.getElementById("firstName").value;
	  	var lastName = document.getElementById("lastName").value;
	  	var email = document.getElementById("email").value;
	  	var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
	  	if(userName==='' || firstName==='' || lastName==='' || email===''){
	  		alert("Please fill all fields...!");
	  		return false;
	  	} else if(!(email).match(emailReg)){
	  		alert('Invalid email...!');
	  		return false;
	  	}
	  	else {
	  		return true;
	  	}


	  }*/

	  submit(){
	  	var userName = document.getElementById("userName").value;
	  	var firstName = document.getElementById("firstName").value;
	  	var lastName = document.getElementById("lastName").value;
	  	var email = document.getElementById("email").value;
	  	var emailReg = /\S+@\S+\.\S+/;
	  	if(userName==='' || firstName==='' || lastName==='' || email===''){
	  		alert("Please fill all fields...!");
	  		
	  	}  else if(!(email).match(emailReg)){
	  		alert("Invalid email...!")
	  	}

	
	}


	 
	render(){
		return(
		<div className="registerForm" >
			<Segment inverted>

				<Form  method="post" id="registerForm" onSubmit={this.submit.bind(this)} inverted >

					<div className="formInput">
						<Form.Input className="required field"  id ="userName"  label='User Name' placeholder='User name' />
						<Form.Input className="required field"  id ="firstName"  label='First name' placeholder='First name' />
						<Form.Input className="required field"  id="lastName" label='Last name' placeholder='Last name' />
						<Form.Input className="required field" type="email" id="email" label='Email' placeholder='Email' />
						<Form.Input className="required field" type="password" label='Password' placeholder='Password' />
						<Form.Input className="required field" type="password" label='Confirm Password' placeholder='Confirm Password' />
					</div>
					<br/>

					<Form.Checkbox label='I agree to the Terms and Conditions' />
					<Button type='submit'>Register</Button>
					<Button type='log in'> Log In </Button>
				</Form>

			</Segment>
		</div>
  			);

	}

}
export default Register;