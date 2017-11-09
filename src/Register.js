import React, { Component } from 'react';
import { Button, Segment, Form } from 'semantic-ui-react';



class Register extends Component {

	  submit(){
		/*alert(document.getElementById("my").value );  ashxatum a*/

		alert(this.refs.userName.value);
	}


	 
	render(){
		return(
			<div className="registrForm">
<Segment inverted>
    <Form onSubmit={this.submit.bind(this)} inverted>

      <div className="formInput">
        <Form.Input id ="my" ref="userName" label='First name' placeholder='First name' maxwidth='50%'/>
        <Form.Input label='Last name' placeholder='Last name' />
        <Form.Input label='Email' placeholder='Email' />
        <Form.Input  type="password" label='Password' placeholder='Password' />
        <Form.Input type="password" label='Confirm Password' placeholder='Confirm Password' />
        </div>
        <br/>

      <Form.Checkbox label='I agree to the Terms and Conditions' />
      <Button type='submit'>Register</Button>
      <Button type='log in'> Log in </Button>
    </Form>
  </Segment>
  </div>
);

	}
}
export default Register;