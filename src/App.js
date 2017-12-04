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
  import TVShows from './TVShows'
  import NotFound from './NotFound'
  import Movie from './Movie'
  import TVShow from './TVShow'

  import Register from './Register'
  import Login from  './Login'
  import Profile from './Profile'
  import TapConfig from './Config'
  import TermsOfConditions from './TermsOfConditions'
  import $ from 'jquery';
import Cookies from 'universal-cookie';



 
  

 import Person from './Person'


import { Button, Icon } from 'semantic-ui-react'

class App extends Component {

  componentWillMount() {
    
    const cookies = new Cookies();
    var token = cookies.get('token');
    if(token=="" || token==undefined){

      return;
    }
    //alert("df");

    $.ajax
    ({
            type: "GET",
            url: TapConfig.apiURL + '/me',
            headers: {'token':token},
            
        
            success: function (data) {
              window.userInfo=JSON.parse(data);

              //alert(window.userInfo);
            },
            error: function(){
              window.userInfo=false;
               // alert("yg");
            }
        })


  }
      
  render() {
      
    return (
          <Router>
      <div className="App">
          <TapMenu/>
          <Segment className='stackable container mainContent'>
            <Switch>
                <Route exact path= {TapConfig.homepage + "/"} component={Home}/>
                <Route exact path={TapConfig.homepage + "/home"} component={Home}/>
                <Route exact path={TapConfig.homepage + "/movies"} component={Movies}/>
                <Route exact path={TapConfig.homepage + "/tvshows"} component={TVShows}/>
                <Route exact path={TapConfig.homepage + "/movies/:movieId"} component={Movie}/>
               <Route exact path={TapConfig.homepage + "/tvshows/:movieId"} component={TVShow}/>

                <Route exact path={TapConfig.homepage + "/register"} component={Register}/>
                <Route exact path={TapConfig.homepage + "/registration"} component={Register}/>
                <Route exact path={TapConfig.homepage + "/termsOfConditions"} component={TermsOfConditions}/>
                <Route exact path={TapConfig.homepage + "/login"} component={Login}/>
                <Route exact path={TapConfig.homepage + "/profile"} component = {Profile}/>
            
               
                <Route exact path={TapConfig.homepage + "/persons/:personId"} component={Person}/>

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