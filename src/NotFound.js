import React, { Component } from 'react';
import './NotFound.css';
import TapMenu from './TapMenu'
import TapFooter from './TapFooter'
import TapMovieCollection from './TapMovieCollection'
import TapSidebarCollection from './TapSidebarCollection'
import { Segment, Grid, Sticky, Item } from 'semantic-ui-react'
import _ from 'lodash'

import { Button, Icon } from 'semantic-ui-react'

class App extends Component {
    state = {}

    handleContextRef = contextRef => this.setState({ contextRef })

  render() {
      const { contextRef } = this.state
    return (
      <div >
            <h3>
              404 Page not found!
            </h3>
      </div>
    );
  }
}

export default App;
