import React, { Component } from 'react';

export default class Aboutme extends Component {

    render() {
        return(
            <div
                style={{ width: '100%',
                    height: '64px',
                    backgroundColor: 'var(--main-color)',
                    color: 'var(--white-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'}}>
                <p style={{ color: 'var(--white-color)'}}>
                    Hello!
                </p>
            </div>
        )
    }
}