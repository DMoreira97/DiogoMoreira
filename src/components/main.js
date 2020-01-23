import React, { Component } from 'react';

import Aboutme from './main/aboutme';

export default class Main extends Component {

    render() {
        return(
            <main style={{ width: '100%'}}>
                <Aboutme></Aboutme>
            </main>
        )
    }
}