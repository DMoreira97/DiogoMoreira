import React, { Component } from 'react';

import Aboutme from './main/aboutme';
import Skills from './main/skills';
import Services from './main/services';
import Experience from './main/experience';
import Portfolio from './main/portfolio';
import Hobbies from './main/hobbies';
import Contacts from './main/contacts';

export default class Main extends Component {

    render() {
        return (
            <main
                style={{
                    width: '100%',
                    paddingLeft: 'calc(10% + 64px)',
                    paddingRight: '10%',
                    boxSizing: 'border-box',
                    color: "var(--black-color)"
                }}>
                <Aboutme></Aboutme>
                <Skills></Skills>
                <Services></Services>
                <Experience></Experience>
                <Portfolio></Portfolio>
                <Hobbies></Hobbies>
                <Contacts></Contacts>
            </main>
        )
    }
}