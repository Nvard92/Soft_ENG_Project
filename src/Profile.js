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
import ReviewCollection from './ReviewCollection'

import Cookies from 'universal-cookie';
class Profile extends Component {

  constructor(props) {
    super(props);
const cookies = new Cookies();
    
    this.state = { suggestions:{}, profile:{}, reviews:{},
   token: cookies.get('token'),
      notFound: false
    };
  }


    componentDidMount()
    {
        // this.getMovieInfo();
        this.getReviews();
        this.getSuggestions();
        this.getProfile();
     
    }

  getProfile()
    {
       
        $.ajax
		({
            type: "GET",
            url: TapConfig.apiURL + '/me/',
            headers: {
            token: this.state.token,
         	},
            contentType: 'application/json',
           success: function(data) {
           	 	var tmp= $.parseJSON(data);
          
            this.setState({
                
                profile: tmp
            });
        }.bind(this),
        error: function(errMsg) {
            console.log(errMsg);
        }.bind(this),
    });
        

    }
getSuggestions()
    {
       
        $.ajax
		({
            type: "GET",
            url: TapConfig.apiURL + '/me/suggest',
            headers: {
            token: this.state.token,
         	},
            contentType: 'application/json',
           success: function(data) {
           	 	var tmp= $.parseJSON(data);
          
            this.setState({
                
                suggestions: tmp,
            });
        }.bind(this),
        error: function(errMsg) {
            console.log(errMsg);
        }.bind(this),
    });
        

    }
  getReviews()
    {
       
        $.ajax
		({
            type: "GET",
            url: TapConfig.apiURL + '/me/reviews',
            headers: {
            token: this.state.token,
         	},
            contentType: 'application/json',
           success: function(data) {
           	console.log(data);
           	var tmp= $.parseJSON(data);
            this.setState({
                
                reviews: tmp,
            });
        }.bind(this),
        error: function(errMsg) {
            console.log(errMsg);
        }.bind(this),
    });
        

    }
    goto(id){
    	 window.location.href='/movies/'+id;
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
                <Item.Content>
                    <Item.Header>
                        {this.state.profile.login}'s Profile
                    </Item.Header>


                    <Item.Description >
                       {this.state.profile.firstName}  {this.state.profile.lastName}
                    </Item.Description>
                    <Item.Description >
                       {this.state.profile.email}
                    </Item.Description>
                    </Item.Content>
                    </Item>
</Item.Group>
       <Grid divided>
                  <Grid.Row>
   <Grid.Column mobile={16} fablet={8} computer={6}>
            
      <Comment.Group >
    <Header as='h3' dividing>My Reviews</Header>
 
{_.times(this.state.reviews.length, i => (
                                 
    <Comment>
      <Comment.Content>
        <Comment.Author as='a' onClick="goto({this.state.reviews[i].movieId})">{this.state.reviews[i].movieName}</Comment.Author>
        <Comment.Metadata>
         <Rating icon='star' defaultRating={this.state.reviews[i].rating} maxRating={5} disabled/>
        </Comment.Metadata>
        <Comment.Text>{this.state.reviews[i].review}</Comment.Text>
        
      </Comment.Content>
    </Comment>
     ))}

 
    </Comment.Group>
    </Grid.Column>
 <Grid.Column mobile={16} fablet={8} computer={6}>
                                    
  <Item.Group divided>
   <Header as='h3' dividing>Suggestions for You</Header>
 
                                  {_.times(this.state.suggestions.length, i => (
                                      <Item key={i}>
                                          <Item.Image className='smallPoster' size='tiny' src={this.state.suggestions[i].posterUrl} />
                                          <Item.Content>
                                              <Item.Header as='a'>{this.state.suggestions[i].nameEng}</Item.Header>
                                              <Item.Meta>{this.state.suggestions[i].comment}</Item.Meta>
                                          </Item.Content>
                                      </Item>
                                  ))}
                              </Item.Group>
     </Grid.Column>
</Grid.Row>
</Grid>

</div>
    );
  }
}

export default Profile;
