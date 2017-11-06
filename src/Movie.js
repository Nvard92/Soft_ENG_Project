import React, { Component } from 'react';
import './Movies.css';
import TapMenu from './TapMenu'
import TapFooter from './TapFooter'
import TapMovieCollection from './TapMovieCollection'
import TapSidebarCollection from './TapSidebarCollection'
import { Segment, Grid, Sticky, Item, Image } from 'semantic-ui-react'
import _ from 'lodash'
import $ from 'jquery'; 
import {
  Route
} from 'react-router-dom';
import NotFound from './NotFound'

import { Button, Icon } from 'semantic-ui-react'

class Movie extends Component {

  constructor(props) {
    super(props);

    this.state = {movie: {URL: 'https://resizing.flixster.com/aJZN0ldw_MkUfzfU8mR6McoovG0=/206x305/v1.bTsxMjU2MjE4MDtqOzE3NTE1OzEyMDA7NTE1MDs3NjA2', 
                          name: 'Blind'
                           },
      notFound: false
    };
  }

  /*componentDidMount()
  {
    $.getJSON('https://randomuser.me/api/asd')
    .done(({ results }) => this.setState({ movie: results }))
    .fail(function( jqxhr, textStatus, error ) {
      if (error.indexOf("404") >=0) {
        this.setState({ notFound: true })
      }
      else {
        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
      }
    }.bind(this)
    );
  }*/

  

   

  render() {

    if(this.state.notFound)
    {
      return (
        <Route exact component={NotFound} />
      );
    }

   

    return (
      <div >
            <h3>
                Movie {this.props.match.params.movieId.toString()}
            </h3> 

             <Image src={this.state.movie.URL} size='medium' rounded /> 
      </div>
    );
  }
}

export default Movie;
