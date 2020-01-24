import React, { Component } from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import Me from '../resources/me.png'

export default class Experience extends Component {

    render() {
        return(
            <div
                style={{ width: '100%',
                    color: 'var(--white-color)',
                    backgroundColor:'var(--main-color)'}}>
                <h2>Contacts</h2>
                <Container className="no-padding">
                    <Row>
                        <Col lg={4} md={4} sm={6} >
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Portural</Card.Title>
                                <Card.Text>
                                    So, could reposed contracts. As parent, the you for of seen in checkin they are being
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={4} sm={6} >
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Phone</Card.Title>
                                <Card.Text>
                                    So, could reposed contracts. As parent, the you for of seen in checkin they are being
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={4} sm={6} >
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Email</Card.Title>
                                <Card.Text>
                                    So, could reposed contracts. As parent, the you for of seen in checkin they are being
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}