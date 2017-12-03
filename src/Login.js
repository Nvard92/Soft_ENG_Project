import React, { Component } from 'react';
import { Button, Segment, Form, View } from 'semantic-ui-react';
import './Login.css';
// import Password from 'try-react-password-input'
import $ from 'jquery';
import TapConfig from './Config'
import Cookies from 'universal-cookie';


class Login extends Component{

	submit(){
		var username = document.getElementById("userName").value;
		var password = document.getElementById("userPass").value;
		
		if(username == ""){
    			alert("Please enter the User Name");
    			return
		}
		if(password == ""){
			alert("Please enter the password");
			return
		}

		$.ajax
		({
            type: "POST",
            url: TapConfig.apiURL + '/users/login',
            data: JSON.stringify({
                "login": username,
                "password": password
            }),
            contentType: 'application/json',
            success: function (data) {
                if (data.success == 404) {
                    alert("wrong username or password")
                }
                const cookies = new Cookies();

                cookies.set('shbasdfg', JSON.parse(data).token, { path: '/' });
                var token = cookies.get('shbasdfg');
                //alert("Data: " + token);
            },
            error: function(){
                alert('wrong username or password');
            }
        })
	} 

	render(){
		return (
			<div style={{display: 'flex', justifyContent: 'center', }}>
				<Segment inverted style={{ width: '50%'}}>
					<Form id="loginForm" onSubmit={this.submit.bind(this)} inverted method='POST'>
						<div className="formInput">
							<Form.Input id ="userName"   placeholder='User name' />
							<div style={{}}>
								<Form.Input id='userPass' placeholder='Password' type="password" className="password-input" />
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
