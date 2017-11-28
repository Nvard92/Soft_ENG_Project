import React, { Component } from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react'
import logo from './logo.png'
import { Link } from 'react-router-dom'

class TapMenu extends Component {

    constructor(){
        super();

        this.state = {
            shoulldOpenMovies: false
        };
    }

    openMovies(){
        this.setState({
            shoulldOpenMovie: true
        })
    }
    closeMovies(){
        this.setState({
            shoulldOpenMovie: false
        })
    }

    onClickMovie()
    {
    }

    render() {
        var menuitem = (
            <a className='browse item' onMouseOver={() => { this.openMovies()}}>
                Movie
            </a>);
        if(this.state.shoulldOpenMovie) {
            menuitem = (
                <a href="/movies"
                    className='browse item'
                   onMouseOver={() => { this.openMovies()} }
                   onMouseOut={ () => { this.closeMovies()} }
                >
                    Movie
                </a>);
        }
        return (
            <div className='ui stackable container menu inverted'>
                <div className='item'>
                    <a href="/home">
                        <Image src={logo}  size='small'/>
                    </a>
                </div>
                {menuitem}
            </div>
        );
    }
}

export default TapMenu;