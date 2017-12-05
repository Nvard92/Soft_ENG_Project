import React, { Component } from 'react';
import { Menu, Image, Dropdown, Button } from 'semantic-ui-react'
import logo from './logo.png'
import TapConfig from './Config'
import Cookies from 'universal-cookie';

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

    logout() {
        const cookies = new Cookies();

        cookies.set('token', "");
        alert("ok");
    }

    render() {
        var menuitemMovie = (
            <a className='browse item' onMouseOver={() => { this.openMovies()}}>
                Movie
            </a>
        );
        if(this.state.shoulldOpenMovie) {
            menuitemMovie = (
                <a href={TapConfig.homepage + "/movies"}
                    className='browse item'
                   onMouseOver={() => { this.openMovies()} }
                   onMouseOut={ () => { this.closeMovies()} }
                >
                    Movie
                </a>);
        }
        var menuitemTV = (
            <a className='browse item' onMouseOver={() => { this.openMovies()}}>
                TV Show
            </a>
        );
        return (
            <div className='ui stackable container menu inverted'>
                <div className='item'>
                    <a href={TapConfig.homepage + "/home"}>
                        <Image src={logo}  size='small'/>
                    </a>
                </div>
                {menuitemMovie}
                {menuitemTV}
                <div className='right menu inverted '>
                    
                    <div className='item'>
                        <a href={TapConfig.homepage + '/register'}>Register</a>
                    </div>
                    <div className='item'>
                        <a href={TapConfig.homepage + '/login'}>Login</a>
                    </div>
                    <div className='item'>
                        <a href="#" onClick= {this.logout.bind(this)}>Logout</a>
                    </div>

                </div>
            </div>
        );
    }
}

export default TapMenu;