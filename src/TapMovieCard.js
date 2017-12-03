import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import TapConfig from './Config'

class TapMovieCard extends Component {

    static defaultProps = {
        url : '',
        rt: 0,
        releaseDate:'',
        descriptionEng:''

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
            <Card href={TapConfig.homepage + this.state.link} >
                <Image src={this.props.posterUrl} />
                <Card.Content>
                    <Card.Header>
                        {this.props.name}
                    </Card.Header>
                    <Card.Meta>
                        <span className='date'>
                            {this.props.releaseDate}
                        </span>
                    </Card.Meta>
                    <Card.Description>
                       {this.props.descriptionEng}
                         </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        {this.props.rt}% RT
                    </a>
                </Card.Content>
            </Card>
        );
    }
}

export default TapMovieCard;