import React, { Component } from 'react';
import './Person.css';
import TapMenu from './TapMenu'
import TapFooter from './TapFooter'
import TapMovieItemCollection from './TapMovieItemCollection'
import TapSidebarCollection from './TapSidebarCollection'
import { Segment, Grid, Sticky, Item } from 'semantic-ui-react'
import _ from 'lodash'
import $ from 'jquery'; 
import {
  Route
} from 'react-router-dom';
import NotFound from './NotFound'
import TapConfig from './Config'

class Person extends Component {

  constructor(props) {
    super(props);

    this.state = {person: {URL: 'https://resizing.flixster.com/aJZN0ldw_MkUfzfU8mR6McoovG0=/206x305/v1.bTsxMjU2MjE4MDtqOzE3NTE1OzEyMDA7NTE1MDs3NjA2', 
                          name: 'Blind'
                           },
      notFound: false, personData: {}, actor:{}, director:{}, writer:{}, producer:{}
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

  
  componentDidMount()
    {
        this.getPerson();
        // console.log(this.personData);
        // this.getShows();
    }
    getPerson()
    {
        $.getJSON( TapConfig.apiURL + '/persons/'+this.props.match.params.personId)
            .done(function( data) {
              console.log(data[0]);
              if(data[0].photoURL[data[0].photoURL.length-1]=='\'')
                data[0].photoURL[data[0].photoURL.length-1]='';
                this.setState( {personData: data[0]} );
                this.setState({actor:data[0].actor})
                this.setState({director:data[0].director})
                this.setState({producer:data[0].producer})
                this.setState({writer:data[0].writer})
                console.log(this.state.personData);
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
            <Item.Image src={this.state.personData.photoURL} />

            <Item.Content>
              <Item.Header>
                 {this.state.personData.nameEng}
              </Item.Header>
              <Item.Description>
               birthDate:  {this.state.personData.birthDate} <br/>
                    birthPlace:  {this.state.personData.birthPlace}   <br/>
                          currentlyLives:  {this.state.personData.currentlyLives}   <br/> 
                           bio:  {this.state.personData.bio}<br/>
              </Item.Description>
            </Item.Content>

          </Item>

                           {this.state.actor.length > 0 &&
                       <Grid.Row>
                      <Grid.Column mobile={16} fablet={8} computer={6}>
                        <h3>
                              Acted in({this.state.actor.length})
                          </h3>
                          <TapMovieItemCollection movies={this.state.actor}/>
                          </Grid.Column>
                          </Grid.Row>
}
                           {this.state.producer.length > 0 &&
                      <Grid.Row>
                     
                      <Grid.Column mobile={16} fablet={8} computer={6}>
                        <h3>
                              Producer in({this.state.producer.length})
                          </h3>
                          <TapMovieItemCollection movies={this.state.producer}/>
                          </Grid.Column>
                          </Grid.Row>
                          }
                           {this.state.director.length > 0 &&
                             <Grid.Row>
                      <Grid.Column mobile={16} fablet={8} computer={6}>
                        <h3>
                              Director in({this.state.director.length})
                          </h3>
                          <TapMovieItemCollection movies={this.state.director}/>
                          </Grid.Column>
                          </Grid.Row>
                        }

                            {this.state.writer.length > 0 &&
                             <Grid.Row>
                      <Grid.Column mobile={16} fablet={8} computer={6}>
                        <h3>
                              Writer in({this.state.writer.length})
                          </h3>
                          <TapMovieItemCollection movies={this.state.writer}/>
                          </Grid.Column>
                          </Grid.Row>
                        }
        </Item.Group>
    );
  }
}

export default Person;
