import React, { Component } from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

export default class Services extends Component {

    render() {
        return(
            <div id="services"
                style={{ width: '100%',
                    color: 'var(--black-color)'}}>
                <h2>Services</h2>
                <Container className="no-padding">
                    <Row className="no-margin">
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Java</Card.Title>
                                <Card.Text>
                                    I have participated in projects doing games for desktop and mobile (Swing, libGDX), also doing distributed systems.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>JavaScript</Card.Title>
                                <Card.Text>
                                    I've worked on open environments using OpenGL and WebGL. And for true web development in websites and web applications.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>React</Card.Title>
                                <Card.Text>
                                    I've used React on a few websites now, including this one. Majorly self-taught with help from the internet.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Laravel</Card.Title>
                                <Card.Text>
                                    Used it on a big project for an Erasmus social network, got to make the most out of the technology.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>C/C++</Card.Title>
                                <Card.Text>
                                    I've done a lot with C/C++. Since low level algorithms for communication in a network, or prohramming drivers, to intelligent algorithms using OpenStreetMap.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Bootstrap</Card.Title>
                                <Card.Text>
                                    With React or with pure HTML and CSS I always try to use Bootstrap, if possible.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>HTML/CSS</Card.Title>
                                <Card.Text>
                                    Learned these when learning the basics. Use them whenever there's the need to.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Node.js</Card.Title>
                                <Card.Text>
                                    Used Node.js on some projects now.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>AWS</Card.Title>
                                <Card.Text>
                                    I have used AWS for personal projects. Mainly worked with the free tier.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Git</Card.Title>
                                <Card.Text>
                                    I use Git in every project. (Github, Gitlab, Bitbucket) It's the best tool to work in team. 
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>MongoDB</Card.Title>
                                <Card.Text>
                                    Used MongoDB on a few projects, it's nice and easy to work with.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>ExpressJS</Card.Title>
                                <Card.Text>
                                    Always used ExpressJS with MongoDB, it makes everything simpler.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>SQL</Card.Title>
                                <Card.Text>
                                    Learned SQL when learning about databases. Even though I use it less and less, I still know how to work with it.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>PostgreSQL</Card.Title>
                                <Card.Text>
                                    Used it in the same project I used Laravel. It's quite intuitive on how to use.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>PHP</Card.Title>
                                <Card.Text>
                                    Learned PHP when learning the basics about web development. It's not used much nowadays. 
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="no-margin" style={{marginTop: '28px'}}>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Adobe Illustrator</Card.Title>
                                <Card.Text>
                                    Self-learned. Used Illustrator on various projects outside college.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Adobe Premiere</Card.Title>
                                <Card.Text>
                                    Self-learned. Used Premiere on a few personal projects, as you'll see below.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Visual Basic</Card.Title>
                                <Card.Text>
                                    After Pascal, VB was the language I learned. It's possible to make interesting projects with VB, and of course connect to Excel.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Excel</Card.Title>
                                <Card.Text>
                                    I use Excel a lot, in and outside of college. 
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