import React, { Component } from 'react';
import './Movies.css';
import TapMenu from './TapMenu'
import TapFooter from './TapFooter'
import TapMovieCollection from './TapMovieCollection'
import TapSidebarCollection from './TapSidebarCollection'
import { Segment, Grid, Sticky, Item } from 'semantic-ui-react'
import _ from 'lodash'

import { Button, Icon } from 'semantic-ui-react'

class Movies extends Component {
    state = {}

    handleContextRef = contextRef => this.setState({ contextRef })

  render() {
      const { contextRef } = this.state
    return (
      <div >
            <h3>
                Movie {this.props.match.params.movieId.toString()}
            </h3>
      </div>
    );
  }
}

export default Movies;
