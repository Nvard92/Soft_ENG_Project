import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import './TapFooter.css'

class TapFooter extends Component {

    render() {
        return (
            <Segment inverted className='container footer' >
            © 2017 TAPMOVIE ALL RIGHTS RESERVED
            </Segment>
        );
    }
}

export default TapFooter;