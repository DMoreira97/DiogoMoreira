import React, { Component } from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

export default class Experience extends Component {

    render() {
        return(
            <div id="experience"
                style={{ width: '100%',
                    color: 'var(--black-color)'}}>
                <h2>Experience</h2>
                <Container className="no-padding">
                    <Row className="no-margin">
                        <Col lg={6} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>FEUP - MIEIC</Card.Title>
                                <Card.Text>
                                    So, could reposed contracts. As parent, the you for of seen in checkin they are being
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>FEUP - MIEIC</Card.Title>
                                <Card.Text>
                                    So, could reposed contracts. As parent, the you for of seen in checkin they are being
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>FEUP - MIEIC</Card.Title>
                                <Card.Text>
                                    So, could reposed contracts. As parent, the you for of seen in checkin they are being
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>FEUP - MIEIC</Card.Title>
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