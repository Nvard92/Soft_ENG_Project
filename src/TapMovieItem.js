import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import TapConfig from './Config'

class TapMovieItem extends Component {

    static defaultProps = {
        name : '',
        id: 0,
        source: 'movies'
        };

    constructor(props){
        super(props);
        this.state = {
            shoulldOpenMovies: true,
            link: TapConfig.homepage + "/"+this.props.source+"/"+this.props.id
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