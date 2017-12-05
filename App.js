import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, Icon } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import { Form, Segment } from 'semantic-ui-react'
import { Grid, Header, Message} from 'semantic-ui-react'
import { Menu } from 'semantic-ui-react'
import ImagesUploader from 'react-images-upload';


class App extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })



  render() {

      const { activeItem } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		>
    <Button animated>
      <Button.Content visible>Next</Button.Content>
      <Button.Content hidden href='http://www.bbc.com/news'>
        <Icon name='right arrow' />
      </Button.Content>
    </Button>
     <Image
    src='/assets/images/wireframe/image-text.png'
    as='a'
    size='large'
    href='http://google.com'
    target='_blank'
    bordered
  />

{ /* Log in Form */}
  <div className='login-form'>
    
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>

    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center' color='midnightblue'>
          <Image src='/logo.png' />
          {' '}Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='midnightblue' fluid size='large'>Login</Button>
          </Segment>
        </Form>

        <Message>
          New to us? <a href='#'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>

 { /*   REGISTRATION FORM */}

<div className="registrForm">
<Segment inverted>
    <Form inverted>

      <div className="formInput">
        <Form.Input label='First name' placeholder='First name' maxwidth='50%'/>
        <Form.Input label='Last name' placeholder='Last name' />
        <Form.Input label='Email' placeholder='Email' />
        <Form.Input label='Password' placeholder='Password' />
        <Form.Input label='Confirm Password' placeholder='Confirm Password' />
        </div>

      <Form.Checkbox label='I agree to the Terms and Conditions' />
      <Button type='submit'>Register</Button>
      <Button type='log in'> Log in </Button>
    </Form>
  </Segment>
  </div>


{/* PROFIEL PAGE */}
{/* User uploads image */}

<div className="profile">


<div className="profilePhoto">
 <ImagesUploader
                url="http://localhost:9090/notmultiple"
                optimisticPreviews
                multiple={false}
                onLoadEnd={(err) => {
                    if (err) {
                        console.error(err);
                    }
                }}
                label="Upload a picture"
                />
                </div>


                <div className="menuBar">
 <Menu>

 <div className="home">
        <Menu.Item
          name='HOME'
          active={activeItem === 'HOME'}
          onClick={this.handleItemClick}/>
        </div>
        <div className="movies">
        <Menu.Item
          name='Favorite Movies'
          active={activeItem === 'Favorite Movies'}
          onClick={this.handleItemClick}
        />
        </div>
        <div className="shows">
        <Menu.Item
          name='Favorite TV Shows'
          active={activeItem === 'Favorite TV Shows'}
          onClick={this.handleItemClick}
        />
        </div>
      </Menu>
      </div>



                </div>
                



      </div>
    );
  }
}




export default App;
