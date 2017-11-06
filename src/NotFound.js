import React, { Component } from 'react';
import './NotFound.css';
import TapMenu from './TapMenu'
import TapFooter from './TapFooter'
import TapMovieCollection from './TapMovieCollection'
import TapSidebarCollection from './TapSidebarCollection'
import { Segment, Grid, Sticky, Item, Image } from 'semantic-ui-react'
/*import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image'*/
import _ from 'lodash'

import { Button, Icon } from 'semantic-ui-react'

class App extends Component {
   

  render() {
     
    return (
      <div class="error_404">
           <Image  src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/7cfd7e15340989.5628faa1cae48.jpg' />


{/*<ResponsiveImage>
  <ResponsiveImageSize
    default
    minWidth={0}
    path={'https://mir-s3-cdn-cf.behance.net/project_modules/disp/7cfd7e15340989.5628faa1cae48.jpg'}
  />
  </ResponsiveImage>*/}


            
         

            
</div>

      
    );
  }
}

export default App;
