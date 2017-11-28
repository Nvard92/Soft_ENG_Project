import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

class TapMovieItem extends Component {

    static defaultProps = {
        name : '',
        id: 0
        };

    constructor(props){
        super(props);
        this.state = {
            shoulldOpenMovies: true,
            link:"/movies/"+this.props.id
        };
    }

    openMovies(){
        this.setState({
            shoulldOpenMovie: false
        })
    }

    render() {
        return (
            <Card href={this.state.link}>
                <Card.Content>
                  <h3> {this.props.name}</h3>              
                </Card.Content>
            </Card>
        );
    }
}

export default TapMovieItem;