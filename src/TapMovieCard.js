import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

class TapMovieCard extends Component {

    static defaultProps = {
        url : '',
        rt: 0
    };

    constructor(props){
        super(props);

        this.state = {
            shoulldOpenMovies: true
        };
    }

    openMovies(){
        this.setState({
            shoulldOpenMovie: false
        })
    }

    render() {
        return (
            <Card>
                <Image src={this.props.url} />
                <Card.Content>
                    <Card.Header>
                        Star Wars: The Last Jedi
                    </Card.Header>
                    <Card.Meta>
                        <span className='date'>
                            2017
                        </span>
                    </Card.Meta>
                    <Card.Description>
                        Rian Johnson (Brick, Looper) writes and directs this installment of the Star Wars saga for Disney and Lucasfilm. ~ Jason Buchanan, Rovi.
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