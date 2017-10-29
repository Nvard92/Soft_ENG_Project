import React, { Component } from 'react';
import './App.css';
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
      <div className="App">
          <TapMenu/>
          <Segment className='stackable container mainContent'>
              <Grid divided>
                  <Grid.Row>
                      <Grid.Column mobile={16} fablet={8} computer={6}>
                          <h3>
                              Movies
                          </h3>
                          <TapMovieCollection/>
                      </Grid.Column>
                      <Grid.Column mobile={16} fablet={8} computer={6}>
                          <h3>
                              TV Shows
                          </h3>
                          <TapMovieCollection/>
                      </Grid.Column>
                      <Grid.Column mobile={16} fablet={8} computer={4}>
                              <Item.Group divided>
                                  {_.times(10, i => (
                                      <Item key={i}>
                                          <Item.Image className='smallPoster' size='tiny' src='https://resizing.flixster.com/DuJ2ZNPN2YCaj8anWU6MQn22Vjo=/206x305/v1.dDsyMTU1MzM7ajsxNzQ3ODsxMjAwOzY0ODs5NjA' />
                                          <Item.Content>
                                              <Item.Header as='a'>Some Movie</Item.Header>
                                              <Item.Meta>By Author</Item.Meta>
                                          </Item.Content>
                                      </Item>
                                  ))}
                              </Item.Group>
                      </Grid.Column>
                  </Grid.Row>
              </Grid>
          </Segment>

          <TapFooter/>

      </div>
    );
  }
}

export default App;
