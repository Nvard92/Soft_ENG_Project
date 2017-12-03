import React, { Component } from 'react';
import './App.css';
import TapMenu from './TapMenu'
import TapFooter from './TapFooter'
import TapMovieCollection from './TapMovieCollection'
import TapSidebarCollection from './TapSidebarCollection'
import { Segment, Grid, Sticky, Item } from 'semantic-ui-react'
import _ from 'lodash'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';

  import Home from './Home'
  import Movies from './Movies'
  import NotFound from './NotFound'
  import Movie from './Movie'

  import Register from './Register'
  import Login from  './Login'
  


 
  

 import Person from './Person'


import { Button, Icon } from 'semantic-ui-react'

class App extends Component {
      
  render() {
      
    return (
          <Router>
      <div className="App">
          <TapMenu/>
          <Segment className='stackable container mainContent'>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/movies" component={Movies}/>
                <Route exact path="/movies/:movieId" component={Movie}/>

                <Route exact path="/register" component={Register}/>
                <Route exact path="/registration" component={Register}/>
                <Route exact path="/login" component={Login}/>
            
               
                <Route exact path="/persons/:personId" component={Person}/>

                <Route exact component={NotFound} />


                </Switch>
                
             
          </Segment>

          <TapFooter/>

      </div>
      </Router>
    );
  }
}

export default App;
