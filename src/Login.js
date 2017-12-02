import React, { Component } from 'react';
import { Button, Segment, Form, View } from 'semantic-ui-react';
import './Login.css';
import Password from 'try-react-password-input'






class Login extends Component{


	submit(){


		var username = document.getElementById("userName").value;
		var password = this.refs.password.value;
		
		if(username == ""){
    			alert("Please enter the User Name");
		}
		if(password == ""){
			alert("Please enter the password");
		}

		
fetch('http://localhost:3000/login', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },

  body: JSON.stringify({
    login: username,
   password: password,
  })
}).then(function(response){  if( response.status=='200' && response.ok == true) {
	return response.json();
} }).then( function(data){})

*/

/* or */
/*var form = new FormData(document.getElementById('login-form'));
fetch("/login", {
  method: "POST",
  body: form
});*/

















		/*var request = new XMLHTTPRequest();
		request.open('POST','URL', true,{username,password});
		request.send();
		request.addEventListener("readystatechange",requestHandler, false);*/
		/*if(request.readyState==4   && request.status==200) *//*  EVERYTHING IS COMPLETED AND SUCCESSFULLY*/
			/* HERE WE MUST REDIRECT USER TO ITS PROFILE PAGE*/
		/*{
			var response= JSON.parse(request.responseText);
		}*/



	} 



	render(){
		return (
			<div style={{display: 'flex', justifyContent: 'center', }}>
			<Segment inverted style={{ width: '50%'}}>
			

				<Form id="loginForm" onSubmit={this.submit.bind(this)} inverted method='POST'>

					<div className="formInput">
						<Form.Input id ="userName"   placeholder='User name' />
						<div style={{}}>
						<Password   ref="password" placeholder='Password' uppercase lowercase digits  className="password-input" />
  
  
  

</div>
						
					</div>
					<br/>

					
					
					<Button type='submit'> Log In </Button>
				</Form>
			

			</Segment>
		</div>

			);
	}
}


export default Login;
