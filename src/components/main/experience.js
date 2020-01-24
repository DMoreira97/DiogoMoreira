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
                        <Col className="sameback" lg={12} md={12} sm={12} style={{marginTop: '30px', width:'100%', height: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10%'}}>
                            <i class="fas fa-user-graduate" style={{fontSize: '40px'}}></i>
                            <h3>Education</h3>
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
                        <Col className="sameback" lg={12} md={12} sm={12} style={{marginTop: '30px', width:'100%', height: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10%'}}>
                            <i class="fas fa-briefcase" style={{fontSize: '40px'}}></i>
                            <h3>Employment</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}