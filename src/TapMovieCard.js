import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import TapConfig from './Config'
import './TapMovieCard.css'
class TapMovieCard extends Component {

    static defaultProps = {
        url : '',
        rt: 0,
        releaseDate:'',
        descriptionEng:'',
        type:''

    };

    constructor(props){
        super(props);
var prefix="/movies/"
console.log(this.props.type);
if(this.props.type=="tvshow")
{
prefix="/tvshows/";
}
else if(this.props.type=="person")
{
    prefix="/persons/";
}
        console.log(prefix);

        this.state = {
            shoulldOpenMovies: true,
            link:prefix+this.props.id
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