import React, { Component } from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import Me from '../resources/me.jpg'

export default class Experience extends Component {

    render() {
        return (
            <div id="hobbies"
                style={{
                    width: '100%',
                    color: 'var(--black-color)'
                }}>
                <h2>Hobbies</h2>
                <Container className="no-padding">
                    <Row className="no-margin">
                        <Col lg={6} md={6} sm={12} style={{marginTop: '30px'}}>
                            <ul>
                                <li>Gym</li>
                                <li>Piano</li>
                                <li>Travelling</li>
                                <li>8 Ball Pool</li>
                                <li>Swimming</li>
                            </ul>
                        </Col>{/*  */}
                        <Col lg={{span:4, offset:1}} md={6} sm={12} style={{marginTop: '30px'}} >
                            <img src={Me} alt="me.jpg" style={{
                                width: '100%',
                                borderRadius: '50%'
                            }}></img>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}