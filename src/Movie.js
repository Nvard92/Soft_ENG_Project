import React, { Component } from 'react';
import './Movies.css';
import TapMenu from './TapMenu'
import TapFooter from './TapFooter'
import TapMovieCollection from './TapMovieCollection'
import TapSidebarCollection from './TapSidebarCollection'
import { Segment, Grid, Sticky, Item } from 'semantic-ui-react'
import _ from 'lodash'
import $ from 'jquery'; 
import {
  Route
} from 'react-router-dom';
import NotFound from './NotFound'

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
     <Item.Group>
          <Item >
            <Item.Image src={this.state.movie.URL} />

            <Item.Content>
              <Item.Header>
                Movie {this.props.match.params.movieId.toString()}
              </Item.Header>
              <div id ="description" style={{ width: "85%", }}>
              <Item.Description >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                 Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                   venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. 
                   Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, 
                   eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. 
                   Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                    Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
                    luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. 
                    Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. 
                    ed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                
              </Item.Description>
              </div>
            </Item.Content>
          </Item>
        </Item.Group>
    );
  }
}

export default Movie;
