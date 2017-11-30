import React, { Component } from 'react';
import './Home.css';
import TapMenu from './TapMenu'
import TapFooter from './TapFooter'
import TapMovieCollection from './TapMovieCollection'
import TapSidebarCollection from './TapSidebarCollection'
import { Segment, Grid, Sticky, Item } from 'semantic-ui-react'
import _ from 'lodash'
import $ from 'jquery'
import TapConfig from './Config'


import { Button, Icon } from 'semantic-ui-react'

class App extends Component {
	
    constructor(props)
    {
        super(props);

        this.state = {
            movies: [],
            shows: []
        };
    }

    componentDidMount()
    {
        this.getMovies();
        this.getShows();
    }

    getMovies()
    {
        $.getJSON( TapConfig.apiURL + '/movies/')
            .done(function( data) {
                this.setState({ movies: data })
            }.bind(this))
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
    }

    getShows()
    {
        $.getJSON( TapConfig.apiURL + '/movies/')
            .done(function( data) {
                this.setState({ movies: data })
            }.bind(this))
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
    }


  render() {
        // alert(this.state.movies.length);
    return (
              <Grid divided>
                  <Grid.Row>
                      <Grid.Column mobile={16} fablet={8} computer={6}>
                          <h3>
                              Movies({this.state.movies.length})
                          </h3>
                          <TapMovieCollection movies={this.state.movies}/>
                      </Grid.Column>
                      <Grid.Column mobile={16} fablet={8} computer={6}>
                          <h3>
                              TV Shows
                          </h3>
                          <TapMovieCollection movies={this.state.shows}/>
                      </Grid.Column>
                      <Grid.Column mobile={16} fablet={8} computer={4}>
                              <Item.Group divided>
                                  {_.times(10, i => (
                                      <Item key={i}>
                                          <Item.Image className='smallPoster' size='tiny' src='https://resizing.flixster.com/DuJ2ZNPN2YCaj8anWU6MQn22Vjo=/206x305/v1.dDsyMTU1MzM7ajsxNzQ3ODsxMjAwOzY0ODs5NjA' />
                                          <Item.Content>
                                              <Item.Header as='a'>Some Movie</Item.Header>
                                              <Item.Meta>By Author</Item.Meta>
                                          </Item.Content>
                                      </Item>
                                  ))}
                              </Item.Group>
                      </Grid.Column>
                  </Grid.Row>
              </Grid>
    );
  }
}

export default App;
