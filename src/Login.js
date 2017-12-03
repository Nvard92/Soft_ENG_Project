import React, { Component } from 'react';
import { Button, Segment, Form, View } from 'semantic-ui-react';
import './Login.css';
// import Password from 'try-react-password-input'






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



	} 



	render(){
		return (
			<div style={{display: 'flex', justifyContent: 'center', }}>
			<Segment inverted style={{ width: '50%'}}>
			

				<Form id="loginForm" onSubmit={this.submit.bind(this)} inverted method='POST'>

					<div className="formInput">
						<Form.Input id ="userName"   placeholder='User name' />
						<div style={{}}>
						<input   placeholder='Password' type="password" className="password-input" />
  
  
  

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
