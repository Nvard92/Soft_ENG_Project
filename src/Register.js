import React, { Component } from 'react';
import { Button, Segment, Form } from 'semantic-ui-react';
import TapConfig from './Config';
import $ from 'jquery';




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
	  	/*var login = this.refs.login.value;*/
	  	var login=document.getElementById("login").value;
	  	var password=document.getElementById("password").value;
	  	var firstName = document.getElementById("firstName").value;
	  	var lastName = document.getElementById("lastName").value;
	  	var email = document.getElementById("email").value;

	  	var emailReg = /\S+@\S+\.\S+/;

	  	if(login==='' || firstName==='' || lastName==='' || email===''){
	  		alert("Please fill all fields...!");
	  		return;
	  	}  else if(!(email).match(emailReg)){
	  		alert("Invalid email...!");
	  		return ;

	  	}



	  	var parameter=JSON.stringify({

                "login": login,

                "password": password,
                "firstName": firstName,
                "lastName": lastName,
                "email":email,
            });

	  	console.log(parameter);

		$.ajax
		({
            type: "POST",
            url: TapConfig.apiURL + '/users/register',
            data: JSON.stringify({

                "login": login,
                "password": password,
                "firstName": firstName,
                "lastName": lastName,
                "email":email,
            }),
            contentType: 'application/json',
            success: function (data) {
            	
            	window.location.href='/tap-movie/home';
           },
            /*error: function(){
                alert('error');
            }*/
        })
	 

	
	}

login(){
	/* redirect to login page*/
	window.location.href='/tap-movie/login';
	
}

	 
	render(){
		return(
		<div className="registerForm" >
			<Segment inverted>

				<Form   inverted >

					<div className="formInput">
						<Form.Input className="required field"   id="login" label='User Name' placeholder='User name' />
						<Form.Input className="required field"  id ="firstName"  label='First name' placeholder='First name' />
						<Form.Input className="required field"  id="lastName" label='Last name' placeholder='Last name' />
						<Form.Input className="required field" type="email" id="email" label='Email' placeholder='Email' />
						<Form.Input className="required field" type="password" id="password" label='Password' placeholder='Password' />
						<Form.Input className="required field" type="password" label='Confirm Password' placeholder='Confirm Password' />
					</div>
					<br/>

					<Form.Checkbox /> 
					<br/>
					
					<a style={{ color: '#f2f4f7'}} href="./termsOfConditions"> I agree with terms of conditions </a>
					

					<br/>
					<br/>

					<Button type='submit' method="post" id="registerForm" onSubmit={this.submit.bind(this)}>Register</Button>
					<Button type='log in' onClick ={this.login.bind(this)}> Log In </Button>
				</Form>

			</Segment>
		</div>
  			);

	}

}
export default Register;