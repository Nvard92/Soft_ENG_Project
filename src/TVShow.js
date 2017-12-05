import React, { Component } from 'react';
import './Movies.css';
import TapMenu from './TapMenu'
import TapFooter from './TapFooter'
import TapMovieCollection from './TapMovieCollection'
import TapSidebarCollection from './TapSidebarCollection'
import { Segment, Grid, Sticky, Item , Button, Comment, Form, Header, Rating} from 'semantic-ui-react'
import _ from 'lodash'
import $ from 'jquery'; 
import {
  Route
} from 'react-router-dom';
import NotFound from './NotFound'
import TapConfig from './Config'
import TapMovieItemCollection from './TapMovieItemCollection'
import Cookies from 'universal-cookie';
class TVShow extends Component {

  constructor(props) {
    super(props);

    this.state = {tvshow: {URL: 'https://resizing.flixster.com/aJZN0ldw_MkUfzfU8mR6McoovG0=/206x305/v1.bTsxMjU2MjE4MDtqOzE3NTE1OzEyMDA7NTE1MDs3NjA2', 
                          name: 'Blind'
                           }, actors:{}, directors:{}, writers:{}, producers:{}, reviews:{},
        description:"",
      notFound: false
    };
  }


    componentDidMount()
    {
        this.getMovieInfo();
        this.getReviews();
     
    }
     getReviews()
    {
        $.getJSON( TapConfig.apiURL + '/tvshows/'+this.props.match.params.movieId+"/reviews")
            .done(function( data) {
                   console.log(data);
             this.setState({reviews:data})
               
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

    getMovieInfo()
    {
        $.getJSON( TapConfig.apiURL + '/tvshows/'+this.props.match.params.movieId+'/seasons')
            .done(function( data) {
                this.setState({tvshow: data[0] })
                this.setState({actors:data[0].actors})
                this.setState({directors:data[0].directors})
                this.setState({producers:data[0].producers})
                this.setState({writers:data[0].writers})
                this.setState({description:data[0].descriptionEng})
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

  addReview(){
        var rating = document.getElementById("rating").value;
        // var rating = $('#rating').rating('get rating');
        var review = document.getElementById("review").value;
        console.log("rating:"+rating+"--review:"+review);
        const cookies = new Cookies();
        var token= cookies.get('token');
        console.log(token);
        $.ajax
        ({
            type: "POST",
            url: TapConfig.apiURL + '/me/review',
            data: JSON.stringify({
                "rating": rating,
                "review": review,
                "movieId":this.props.match.params.movieId
            }),
            headers: {
            token: token,
         }   ,
            contentType: 'application/json',
            success: function (data) {
            
                
                // window.location.href='/tap-movie/home';
                //var token = cookies.get('token');
                //alert("Data: " + token);
            },
            error: function(){
                alert('wrong username or password');
            }
        })



} 


   

  render() {

    if(this.state.notFound)
    {
      return (
        <Route exact component={NotFound} />
      );
    }

   

    return (
    <div>
        <Item.Group>

            <Item >
                <Item.Image src={this.state.tvshow.posterUrl} />

                <Item.Content>
                    <Item.Header>
                        {this.state.tvshow.nameEng}
                    </Item.Header>

  
                    <Item.Description>
                       rottenTomatoesRating: {this.state.tvshow.rottenTomatoesRating}
                    </Item.Description>

                    <Item.Description>
                       description: {this.state.description}
                    </Item.Description>


                </Item.Content>
            </Item>

            {this.state.actors!=null && this.state.actors.length>0 &&
            <Grid.Row>
                <Grid.Column mobile={16} fablet={8} computer={6}>
                    <h3>
                        Actors({this.state.actors.length})
                    </h3>
                    <TapMovieItemCollection movies={this.state.actors} source="persons"/>
                </Grid.Column>
            </Grid.Row>
            }
            {this.state.producers!=null &&this.state.producers.length>0 &&
            <Grid.Row>

                <Grid.Column mobile={16} fablet={8} computer={6}>
                    <h3>
                        Producers({this.state.producers.length})
                    </h3>
                    <TapMovieItemCollection movies={this.state.producers} source="persons"/>
                </Grid.Column>
            </Grid.Row>
            }
            {this.state.directors!=null && this.state.directors.length>0 &&
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

            {this.state.actors!=null && this.state.actors.length>0 &&
            <Grid.Row>
                <Grid.Column mobile={16} fablet={8} computer={6}>
                    <h3>
                        Actors({this.state.actors.length})
                    </h3>
                    <TapMovieItemCollection movies={this.state.actors} source="persons"/>
                </Grid.Column>
            </Grid.Row>
            }
            {this.state.producers!=null &&this.state.producers.length>0 &&
            <Grid.Row>

                <Grid.Column mobile={16} fablet={8} computer={6}>
                    <h3>
                        Producers({this.state.producers.length})
                    </h3>
                    <TapMovieItemCollection movies={this.state.producers} source="persons"/>
                </Grid.Column>
            </Grid.Row>
            }
            {this.state.directors!=null && this.state.directors.length>0 &&
            <Grid.Row>
                <Grid.Column mobile={16} fablet={8} computer={6}>
                    <h3>
                        Directors({this.state.directors.length})
                    </h3>
                    <TapMovieItemCollection movies={this.state.directors} source="persons"/>
                </Grid.Column>
            </Grid.Row>
            }


    <Comment.Group >
    <Header as='h3' dividing>Reviews</Header>
  <Form reply>
      <Form.TextArea id="review"/>
      <Rating icon='star' name="rating" id="rating" defaultRating={-1} maxRating={5}/>
      <Button content='Add Review' onClick={this.addReview.bind(this)} labelPosition='left' icon='edit' primary />
    </Form>

 {_.times(this.state.reviews.length, i => (
                                 
    <Comment>
      <Comment.Content>
        <Comment.Author as='a'>{this.state.reviews[i].userName}</Comment.Author>
        <Comment.Metadata>
         <Rating icon='star' defaultRating={this.state.reviews[i].rating} maxRating={5} disabled/>
        </Comment.Metadata>
        <Comment.Text>{this.state.reviews[i].review}</Comment.Text>
        
      </Comment.Content>
    </Comment>
     ))}
    </Comment.Group>
 
     </div>

    );
  }
}

export default TVShow;
