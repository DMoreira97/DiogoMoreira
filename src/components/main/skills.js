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
                                    I can code with any predefined formatting for any project, always keeping the code clean and easy to understand.
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
                                    I'm not a designer, but I know what looks good and what not, so I try to keep everything cleaned up.
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
                                    My most recent work was on web development and I'm able to do both front and back-end, being it a website or a web application.
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
                                    I always keep everyone, from team members to superiors or clients, posted on the progress of a project.
                                </Card.Text>
                                <ProgressBar now={90} label={`${90}%`} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Teamwork</Card.Title>
                                <Card.Text>
                                    I've worked many times in a team and I was consistently capable of gaining my co-workers trust through good problem solving and communication skills.    
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
                                    I've been the leader of a team a few times and earned the respect of my team members being decisive and passionate about what we want to achieve.
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