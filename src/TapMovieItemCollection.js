import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.min'
import 'swiper/dist/css/swiper.min.css'
import './TapMovieItemCollection.css'
import TapMovieItem from './TapMovieItem'


// http://idangero.us/swiper/
class TapMovieItemCollection extends Component {

    constructor(props) {
        super(props)

        this.state = {
            movies: props.movies
        }

    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({movies: nextProps.movies});
    }

    componentDidMount() {
        this.siper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 1,
            loop: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    componentDidUpdate (prevProps) {
        // if(this.siper) {
        //     this.siper.update();
        // }
        this.siper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 1,
            loop: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    render() {
        var indents = [];
        for (var i = 0; i < this.state.movies.length; i++) {
            indents.push(
                <div className='swiper-slide' >
                    <TapMovieItem name={this.state.movies[i].name} source={this.props.source} id={this.state.movies[i].id}></TapMovieItem>
                </div>
            );
        }
        return (
            <div className='swiper-container'>
                <div className='swiper-wrapper'>
                    {indents}
                
                </div>

                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        );
    }
}

export default TapMovieItemCollection;