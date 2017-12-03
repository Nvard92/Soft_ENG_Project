import React, { Component } from 'react';
import TapMenu from './TapMenu'
import TapFooter from './TapFooter'
import TapMovieCollection from './TapMovieCollection'
import TapSidebarCollection from './TapSidebarCollection'
import { Segment, Grid, Sticky, Item, Image } from 'semantic-ui-react'
import error_404 from "./404.jpg";
/*import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image'*/
import _ from 'lodash'

import { Button, Icon } from 'semantic-ui-react'

class NotFound extends Component {
   

  render() {
     
    return (
      <div className="error_404">

           <Image  className="centered" src={error_404} />  

      </div>

      
    );
  }
}

export default NotFound;
