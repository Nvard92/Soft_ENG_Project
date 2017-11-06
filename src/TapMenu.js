import React, { Component } from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react'
import logo from './logo.png'

class TapMenu extends Component {

    constructor(){
        super();

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
            <div className='ui stackable container menu inverted'>
                <div className='item'>
                    <Image src={logo}  size='small'/>
                </div>
                <a className='browse item' onMouseOver={() => { this.openMovies()}}>
                    Movie
                </a>
            </div>
        );
    }
}

export default TapMenu;