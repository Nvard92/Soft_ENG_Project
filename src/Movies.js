import React, { Component } from 'react';
import './Movie.css';
import TapMenu from './TapMenu'
import TapFooter from './TapFooter'
import TapMovieCollection from './TapMovieCollection'
import TapSidebarCollection from './TapSidebarCollection'
import { Segment, Grid, Sticky, Item } from 'semantic-ui-react'
import _ from 'lodash'

import { Button, Icon } from 'semantic-ui-react'

class Movie extends Component {
    state = {}

    handleContextRef = contextRef => this.setState({ contextRef })

  render() {
      const { contextRef } = this.state
    return (
      <div >
            <h3>
                Movies Page
            </h3>
      </div>
    );
  }
}

export default Movie;
