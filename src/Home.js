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
            shows: [],
            books:[]
        };
    }

    componentDidMount()
    {
        this.getMovies();
        this.getShows();
        this.getBooks();
    }

    getMovies()
    {
        $.getJSON( TapConfig.apiURL + '/movies/?filter=boxOffice')
            .done(function( data) {
                this.setState({ movies: data })
                console.log(this.state.movies);
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
        $.getJSON( TapConfig.apiURL + '/tvshows/?filter=boxOffice')
            .done(function( data) {
                this.setState({ shows: data })
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

 getBooks()
    {
        $.getJSON( TapConfig.apiURL + '/books/?filter=year&start=20&count=10')
            .done(function( data) {
                this.setState({ books: data });
                 
                console.log(data);
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
                              TV Shows ({this.state.shows.length})
                          </h3>
                          <TapMovieCollection shows={this.state.shows}/>
                      </Grid.Column>
                      <Grid.Column mobile={16} fablet={8} computer={4}>
                              <Item.Group divided>
                                  {_.times(this.state.books.length, i => (
                                      <Item key={i}>
                                          <Item.Image className='smallPoster' size='tiny' src={this.state.books[i].coverURL} />
                                          <Item.Content>
                                              <Item.Header as='a'>{this.state.books[i].nameEng}</Item.Header>
                                              <Item.Meta>{this.state.books[i].writers[0].name}</Item.Meta>
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