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
                                    I code along the lines defined for each project, and I have no problem using one way or another.
                                </Card.Text>
                                <ProgressBar now={90} label={`${95}%`} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Design</Card.Title>
                                <Card.Text>
                                    I'm not a designer. But I know what looks good and what not, so I try to keep everything cleaned up.
                                </Card.Text>
                                <ProgressBar now={90} label={`${75}%`} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Full Stack Developer</Card.Title>
                                <Card.Text>
                                    What I've worked more lately is web development. But being it a website or an app, I can do both front and back-end.
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
                                    I always try to keep everyone posted on what's going on in a project, being team members, superiors, or clients.
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
                                    Working in a team can bring a lot of problems but I try to keep the spirits up and focus on the project.
                                </Card.Text>
                                <ProgressBar now={95} label={`${95}%`} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Leadership</Card.Title>
                                <Card.Text>
                                    I've been the leader of a team more than once, and through trust and positivity within the team, I can get the job done.
                                </Card.Text>
                                <ProgressBar now={75} label={`${75}%`} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Portuguese</Card.Title>
                                <Card.Text>
                                    Fluent - Native
                                </Card.Text>
                                <ProgressBar now={100} label={`${100}%`} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>English</Card.Title>
                                <Card.Text>
                                    Fluent - Second language
                                </Card.Text>
                                <ProgressBar now={100} label={`${100}%`} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>French/Spanish</Card.Title>
                                <Card.Text>
                                    I can understand well and speak very little.
                                </Card.Text>
                                <ProgressBar now={25} label={`${25}%`} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}