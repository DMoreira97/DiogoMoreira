import React, { Component } from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import Me from '../resources/me2.jpg'

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
                        <Col xl={{ span: 6, offset: 1 }} lg={{ span: 6, offset: 0 }} md={6} sm={6} style={{
                            textAlign: 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: '30px'
                        }}>
                            <p>Chess <a target="_blank" rel="noopener noreferrer" href="https://lichess.org/@/The_King_Chess" style={{
                                color: '(var(--main-color))',
                                marginLeft: 5
                            }}><i class="fas fa-chess-knight"></i></a></p>
                            <p>Travelling</p>
                            <p>Cooking</p>
                            <p>Design</p>
                            <p>8 Ball Pool</p>
                            <p>Padel</p>
                            <p>Gymnasium</p>
                        </Col>
                        
                        <Col xl={{ span: 4, offset: 1 }} lg={{ span: 6, offset: 0 }} md={{ span: 8, offset: 2 }} sm={12} style={{ marginTop: '30px' }}>
                            <img src={Me} alt="me2.jpg" style={{
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