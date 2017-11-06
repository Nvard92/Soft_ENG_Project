import React, { Component } from 'react';
import './Movies.css';
import TapMenu from './TapMenu'
import TapFooter from './TapFooter'
import TapMovieCollection from './TapMovieCollection'
import TapSidebarCollection from './TapSidebarCollection'
import { Segment, Grid, Sticky, Item } from 'semantic-ui-react'
import _ from 'lodash'
import $ from 'jquery'; 

import { Button, Icon } from 'semantic-ui-react'

class Movies extends Component {

  constructor(props) {
    super(props);

    this.state = {movie: []};
  }

  componentDidMount()
  {
    $.getJSON('https://randomuser.me/api/')
    .then(({ results }) => this.setState({ movie: results }));
  }

    state = {}

    handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const movies = this.state.movie.map((item, i) => (
      <div>
        <h1>{ item.name.first }</h1>
        <span>{ item.cell }, { item.email }</span>
      </div>
    ));

    return (
      <div >
            <h3>
                Movie {this.props.match.params.movieId.toString()}
            </h3>
            <div className="panel-list">{ movies }</div>
      </div>
    );
  }
}

export default Movies;
