import React, { Component } from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

export default class Experience extends Component {

    render() {
        return (
            <div id="experience"
                style={{
                    width: '100%',
                    color: 'var(--black-color)'
                }}>
                <h2>Experience</h2>
                <Container className="no-padding">
                    <Row className="no-margin">
                        <Col className="sameback" lg={12} md={12} sm={12} style={{ marginTop: '30px', width: '100%', height: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10%' }}>
                            <i class="fas fa-user-graduate" style={{ fontSize: '40px' }}></i>
                            <h3>Education</h3>
                        </Col>
                        <Col lg={6} md={6} sm={12} style={{ marginTop: '30px' }}>
                            <Card style={{
                                width: '100%',
                                color: 'var(--black-color)'
                            }}>
                                <Card.Body>
                                    <Card.Title>FEUP - MIEIC</Card.Title>
                                    <div style={{
                                        color: 'var(--white-color)',
                                        background: 'var(--main-color)',
                                        position: 'absolute',
                                        top: '16px',
                                        right: -10,
                                        padding: 4
                                    }}>
                                        <h5 style={{ margin: 0 }}>2016 - Present</h5>
                                    </div>
                                    <Card.Text>
                                        Faculty of Engineering - University of Porto, Master in Informatics and Computing Engineering.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} md={6} sm={12} style={{ marginTop: '30px' }}>
                            <Card style={{
                                width: '100%',
                                color: 'var(--black-color)'
                            }}>
                                <Card.Body>
                                    <Card.Title>CIC</Card.Title>
                                    <div style={{
                                        color: 'var(--white-color)',
                                        background: 'var(--main-color)',
                                        position: 'absolute',
                                        top: '16px',
                                        right: -10,
                                        padding: 4
                                    }}>
                                        <h5 style={{ margin: 0 }}>2012 - 2015</h5>
                                    </div>
                                    <Card.Text>
                                        Colégio Internato dos Carvalhos, Highschool in Informatics.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="sameback" lg={12} md={12} sm={12} style={{ marginTop: '30px', width: '100%', height: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10%' }}>
                            <i class="fas fa-briefcase" style={{ fontSize: '40px' }}></i>
                            <h3>Employment</h3>
                        </Col>
                        <Col lg={6} md={6} sm={12} style={{ marginTop: '30px' }}>
                            <Card style={{
                                width: '100%',
                                color: 'var(--black-color)'
                            }}>
                                <Card.Body>
                                    <Card.Title>Web Developer (freelancer)</Card.Title>
                                    <div style={{
                                        color: 'var(--white-color)',
                                        background: 'var(--main-color)',
                                        position: 'absolute',
                                        top: '16px',
                                        right: -10,
                                        padding: 4
                                    }}>
                                        <h5 style={{ margin: 0 }}>2018 - Present</h5>
                                    </div>
                                    <Card.Text>
                                        I've done some websites with clients I got, but latelly I'm trying to join the freelancer.com community.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} md={6} sm={12} style={{ marginTop: '30px' }}>
                            <Card style={{
                                width: '100%',
                                color: 'var(--black-color)'
                            }}>
                                <Card.Body>
                                    <Card.Title>CEO Assistant for M. Cavadas Moreira, LDA</Card.Title>
                                    <div style={{
                                        color: 'var(--white-color)',
                                        background: 'var(--main-color)',
                                        position: 'absolute',
                                        top: '16px',
                                        right: -10,
                                        padding: 4
                                    }}>
                                        <h5 style={{ margin: 0 }}>2017 - Present</h5>
                                    </div>
                                    <Card.Text>
                                        Regularly, one month every summer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="sameback" lg={12} md={12} sm={12} style={{ marginTop: '30px', width: '100%', height: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10%' }}>
                            <i class="fas fa-building" style={{ fontSize: '40px' }}></i>
                            <h3>Associativism</h3>
                        </Col>
                        <Col lg={6} md={6} sm={12} style={{ marginTop: '30px' }}>
                            <Card style={{
                                width: '100%',
                                color: 'var(--black-color)'
                            }}>
                                <Card.Body>
                                    <Card.Title>BEST Porto</Card.Title>
                                    <div style={{
                                        color: 'var(--white-color)',
                                        background: 'var(--main-color)',
                                        position: 'absolute',
                                        top: '16px',
                                        right: -10,
                                        padding: 4
                                    }}>
                                        <h5 style={{ margin: 0 }}>2016 - 2019</h5>
                                    </div>
                                    <Card.Text>
                                        Board of European Students of Tecchnology:
                                        <Container className="no-padding">
                                            <Row className="no-margin">
                                                <Col lg={6} md={6} sm={6}> <p>Baby Member</p> </Col>
                                                <Col lg={6} md={6} sm={6}> <p>2016 - 2018</p> </Col>
                                                <Col lg={6} md={6} sm={6}> <p>IT Coordinator</p> </Col>
                                                <Col lg={6} md={6} sm={6}> <p>2017 - 2018</p> </Col>
                                                <Col lg={6} md={6} sm={6}> <p>Full Member</p> </Col>
                                                <Col lg={6} md={6} sm={6}> <p>2018 - 2019</p> </Col>
                                                <Col lg={6} md={6} sm={6}> <p>President for the Fiscal Council</p> </Col>
                                                <Col lg={6} md={6} sm={6}> <p>2018 - 2019</p> </Col>
                                            </Row>
                                        </Container>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} md={6} sm={12} style={{ marginTop: '30px' }}>
                            <Card style={{
                                width: '100%',
                                color: 'var(--black-color)'
                            }}>
                                <Card.Body>
                                    <Card.Title>AEFEUP</Card.Title>
                                    <div style={{
                                        color: 'var(--white-color)',
                                        background: 'var(--main-color)',
                                        position: 'absolute',
                                        top: '16px',
                                        right: -10,
                                        padding: 4
                                    }}>
                                        <h5 style={{ margin: 0 }}>2016 - 2019</h5>
                                    </div>
                                    <Card.Text>
                                        Board of European Students of Technology:
                                        <Container className="no-padding">
                                            <Row className="no-margin">
                                                <Col lg={6} md={6} sm={6}> <p>Sports Staff</p> </Col>
                                                <Col lg={6} md={6} sm={6}> <p>2017 - 2018</p> </Col>
                                                <Col lg={6} md={6} sm={6}> <p>IT Coordinator</p> </Col>
                                                <Col lg={6} md={6} sm={6}> <p>2018 - 2019</p> </Col>
                                            </Row>
                                        </Container>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} md={6} sm={12} style={{ marginTop: '30px' }}>
                            <Card style={{
                                width: '100%',
                                color: 'var(--black-color)'
                            }}>
                                <Card.Body>
                                    <Card.Title>FEUP Buddy</Card.Title>
                                    <div style={{
                                        color: 'var(--white-color)',
                                        background: 'var(--main-color)',
                                        position: 'absolute',
                                        top: '16px',
                                        right: -10,
                                        padding: 4
                                    }}>
                                        <h5 style={{ margin: 0 }}>2018 - 2019</h5>
                                    </div>
                                    <Card.Text>
                                        It's program from FEUP to help Erasmus Students in whatever they may need.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} md={6} sm={12} style={{ marginTop: '30px' }}>
                            <Card style={{
                                width: '100%',
                                color: 'var(--black-color)'
                            }}>
                                <Card.Body>
                                    <Card.Title>TEDx University of Porto</Card.Title>
                                    <div style={{
                                        color: 'var(--white-color)',
                                        background: 'var(--main-color)',
                                        position: 'absolute',
                                        top: '16px',
                                        right: -10,
                                        padding: 4
                                    }}>
                                        <h5 style={{ margin: 0 }}>2017</h5>
                                    </div>
                                    <Card.Text>
                                        I was a member of staff for the event.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} md={6} sm={12} style={{ marginTop: '30px' }}>
                            <Card style={{
                                width: '100%',
                                color: 'var(--black-color)'
                            }}>
                                <Card.Body>
                                    <Card.Title>Climate Change Leadership Porto<br/>Solutions for the Wine Industry</Card.Title>
                                    <div style={{
                                        color: 'var(--white-color)',
                                        background: 'var(--main-color)',
                                        position: 'absolute',
                                        top: '16px',
                                        right: -10,
                                        padding: 4
                                    }}>
                                        <h5 style={{ margin: 0 }}>2017</h5>
                                    </div>
                                    <Card.Text>
                                        I was a member of staff for the event.
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