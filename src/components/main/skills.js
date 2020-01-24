import React, { Component } from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

export default class Skills extends Component {

    render() {
        return(
            <div id="skills"
                style={{ width: '100%',
                    color: 'var(--black-color)'}}>
                <h2>Skills</h2>
                <Container className="no-padding">
                    <Row className="no-margin">
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Coding</Card.Title>
                                <Card.Text>
                                    So, could reposed contracts. As parent, the you for of seen in checkin they are being
                                </Card.Text>
                                <ProgressBar now={90} label={`${90}%`} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Design</Card.Title>
                                <Card.Text>
                                    So, could reposed contracts. As parent, the you for of seen in checkin they are being
                                </Card.Text>
                                <ProgressBar now={90} label={`${90}%`} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Full Stack Developer</Card.Title>
                                <Card.Text>
                                    So, could reposed contracts. As parent, the you for of seen in checkin they are being
                                </Card.Text>
                                <ProgressBar now={90} label={`${90}%`} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Communication</Card.Title>
                                <Card.Text>
                                    So, could reposed contracts. As parent, the you for of seen in checkin they are being
                                </Card.Text>
                                <ProgressBar now={90} label={`${90}%`} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Teamwork/Team Spirit</Card.Title>
                                <Card.Text>
                                    So, could reposed contracts. As parent, the you for of seen in checkin they are being
                                </Card.Text>
                                <ProgressBar now={90} label={`${90}%`} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Leadership</Card.Title>
                                <Card.Text>
                                    So, could reposed contracts. As parent, the you for of seen in checkin they are being
                                </Card.Text>
                                <ProgressBar now={90} label={`${90}%`} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Portuguese</Card.Title>
                                <Card.Text>
                                    So, could reposed contracts. As parent, the you for of seen in checkin they are being
                                </Card.Text>
                                <ProgressBar now={90} label={`${90}%`} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>English</Card.Title>
                                <Card.Text>
                                    So, could reposed contracts. As parent, the you for of seen in checkin they are being
                                </Card.Text>
                                <ProgressBar now={90} label={`${90}%`} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>French/Spanish</Card.Title>
                                <Card.Text>
                                    So, could reposed contracts. As parent, the you for of seen in checkin they are being
                                </Card.Text>
                                <ProgressBar now={20} label={`${20}%`} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}