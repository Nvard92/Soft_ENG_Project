import React, { Component } from 'react';
import { Button, Segment, Form, View } from 'semantic-ui-react';
import './Login.css';






class Login extends Component{

	

	submit(){

	}



	render(){
		return (
			<div style={{display: 'flex', justifyContent: 'center',}}>
			<Segment inverted style={{ width: '50%'}}>
			

				<Form id="loginForm" onSubmit={this.submit.bind(this)} inverted>

					<div className="formInput">
						<Form.Input className="required field"  id ="userName"  label='User Name' placeholder='User name' />
						<Form.Input className="required field" type="password" label='Password' placeholder='Password' />
						
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
