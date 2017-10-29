import React, { Component } from 'react';
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import './TapMovieCollection.css'
import TapMovieCard from './TapMovieCard'


// http://idangero.us/swiper/
class TapMovieCollection extends Component {

    constructor() {
        super()

        this.state = {
        }

    }

    componentDidMount() {
        this.siper = new Swiper('.swiper-container', {
            slidesPerView: 2,
            spaceBetween: 3,
            loop: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    componentDidUpdate (prevProps) {

    }

    render() {
        return (
            <div className='swiper-container'>
                <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                        <TapMovieCard rt='91' url='https://resizing.flixster.com/KW2O09dt3JjOO4RKeLY7pUYwm2M=/206x305/v1.bTsxMjU0NjIzNDtqOzE3NTE1OzEyMDA7MTY4ODsyNTAw'></TapMovieCard>
                    </div>
                    <div className='swiper-slide'>
                        <TapMovieCard rt={85} url='https://resizing.flixster.com/7m0qRNthuF-nJ5q2te-edOQKdWQ=/206x305/v1.bTsxMjIzNzIxOTtwOzE3NTExOzEyMDA7NzIwOzEwNjU'/>
                    </div>
                    <div className='swiper-slide'>
                        <TapMovieCard></TapMovieCard>
                    </div>
                    <div className='swiper-slide'>
                        <TapMovieCard></TapMovieCard>
                    </div>
                    <div className='swiper-slide'>
                        <TapMovieCard></TapMovieCard>
                    </div>
                </div>

                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        );
    }
}

export default TapMovieCollection;