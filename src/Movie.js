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
import TapConfig from './Config'
import TapMovieItemCollection from './TapMovieItemCollection'
class Movie extends Component {

  constructor(props) {
    super(props);

    this.state = {movie: {URL: 'https://resizing.flixster.com/aJZN0ldw_MkUfzfU8mR6McoovG0=/206x305/v1.bTsxMjU2MjE4MDtqOzE3NTE1OzEyMDA7NTE1MDs3NjA2', 
                          name: 'Blind'
                           }, actors:{}, directors:{}, writers:{}, producers:{},
      notFound: false
    };
  }


    componentDidMount()
    {
        this.getMovieInfo();
     
    }

    getMovieInfo()
    {
        $.getJSON( TapConfig.apiURL + '/movies/'+this.props.match.params.movieId)
            .done(function( data) {
                this.setState({ movie: data[0] })
                this.setState({actors:data[0].actors})
                this.setState({directors:data[0].directors})
                this.setState({producers:data[0].producers})
                this.setState({writers:data[0].writers})
                console.log(this.state.movie);
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

    if(this.state.notFound)
    {
      return (
        <Route exact component={NotFound} />
      );
    }

   

    return (

   

        <Item.Group>

          <Item >
            <Item.Image src={this.state.movie.posterUrl} />

            <Item.Content>
              <Item.Header>
               {this.state.movie.nameEng}
              </Item.Header>

             
              <Item.Description >
                 {this.state.movie.nameEng}
              </Item.Description>
              
              <Item.Description>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, consectetur cum delectus dolor dolorem
                dolorum earum eius ex impedit labore magni mollitia neque nihil omnis, quas quidem, reiciendis saepe voluptates?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor error illum minus necessitatibus nemo
                nisi perferendis quibusdam rem temporibus. Aliquam ducimus eius hic nihil quas. A adipisci dolorem quis soluta.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut commodi delectus dolore dolorem
                xdoloremque dolores ducimus error explicabo fuga ipsam nemo, odio praesentium quo quod rerum voluptatibus! Quidem, voluptas.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, consectetur cum delectus dolor dolorem
                dolorum earum eius ex impedit labore magni mollitia neque nihil omnis, quas quidem, reiciendis saepe voluptates?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor error illum minus necessitatibus nemo
                nisi perferendis quibusdam rem temporibus. Aliquam ducimus eius hic nihil quas. A adipisci dolorem quis soluta.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut commodi delectus dolore dolorem
                xdoloremque dolores ducimus error explicabo fuga ipsam nemo, odio praesentium quo quod rerum voluptatibus! Quidem, voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, consectetur cum delectus dolor dolorem
                dolorum earum eius ex impedit labore magni mollitia neque nihil omnis, quas quidem, reiciendis saepe voluptates?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor error illum minus necessitatibus nemo
                nisi perferendis quibusdam rem temporibus. Aliquam ducimus eius hic nihil quas. A adipisci dolorem quis soluta.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut commodi delectus dolore dolorem
                xdoloremque dolores ducimus error explicabo fuga ipsam nemo, odio praesentium quo quod rerum voluptatibus! Quidem, voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, consectetur cum delectus dolor dolorem
                dolorum earum eius ex impedit labore magni mollitia neque nihil omnis, quas quidem, reiciendis saepe voluptates?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor error illum minus necessitatibus nemo
                nisi perferendis quibusdam rem temporibus. Aliquam ducimus eius hic nihil quas. A adipisci dolorem quis soluta.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut commodi delectus dolore dolorem
                xdoloremque dolores ducimus error explicabo fuga ipsam nemo, odio praesentium quo quod rerum voluptatibus! Quidem, voluptas.
              </Item.Description>

            </Item.Content>
          </Item>


                           {this.state.actors.length > 0 &&
                       <Grid.Row>
                      <Grid.Column mobile={16} fablet={8} computer={6}>
                        <h3>
                              Actors({this.state.actors.length})
                          </h3>
                          <TapMovieItemCollection movies={this.state.actors} source="persons"/>
                          </Grid.Column>
                          </Grid.Row>
                            }
                           {this.state.producers.length > 0 &&
                      <Grid.Row>
                     
                      <Grid.Column mobile={16} fablet={8} computer={6}>
                        <h3>
                              Producers({this.state.producers.length})
                          </h3>
                          <TapMovieItemCollection movies={this.state.producers} source="persons"/>
                          </Grid.Column>
                          </Grid.Row>
                          }
                           {this.state.directors.length > 0 &&
                             <Grid.Row>
                      <Grid.Column mobile={16} fablet={8} computer={6}>
                        <h3>
                              Directors({this.state.directors.length})
                          </h3>
                          <TapMovieItemCollection movies={this.state.directors} source="persons"/>
                          </Grid.Column>
                          </Grid.Row>
                        }

                         
                                </Item.Group>

    );
  }
}

export default Movie;
