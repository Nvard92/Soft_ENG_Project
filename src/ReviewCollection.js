import React, { Component } from 'react';
import './Movie.css';
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
class ReviewCollection extends Component {

  constructor(props) {
    super(props);

    const cookies = new Cookies();
    
        
    this.state = {reviews:{}, movieId:props.movieId, source:props.source,
      notFound: false, token: cookies.get('token')
    };
  }

    componentWillReceiveProps(nextProps)
    {
        this.setState({movieId: nextProps.movieId});
        this.setState({source: nextProps.source});
           // console.log(this.state.movies);
    }
    componentDidMount()
    {
        // this.getMovieInfo();
        this.getReviews();
     
    }

   
  addReview(){
        var rating = document.getElementById("rating").value;
        // var rating = $('#rating').rating('get rating');
        var review = document.getElementById("review").value;
        console.log("rating:"+rating+"--review:"+review);
        console.log(this.state);
        var source= this.state.source;
        var id= this.state.movieId;
        $.ajax
        ({
            type: "POST",
            url: TapConfig.apiURL + '/me/review',
            data: JSON.stringify({
                "rating": rating,
                "review": review,
                "movieId":this.state.movieId
            }),
            headers: {
            token: this.state.token,
         }   ,
            contentType: 'application/json',
            success: function (data) {
                
                console.log('/'+source+'/'+id);
                window.location.href='/'+source+'/'+id;
                //var token = cookies.get('token');
                //alert("Data: " + token);
            },
            error: function(){
                alert('wrong username or password');
            }
        })



} 

  getReviews()
  {
        $.getJSON( TapConfig.apiURL + '/'+this.state.source+'/'+this.state.movieId+"/reviews")
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
   

  render() {

    if(this.state.notFound)
    {
      return (
        <Route exact component={NotFound}/>
      );
    }

   

    return (
    

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

    );
  }
}

export default ReviewCollection;
