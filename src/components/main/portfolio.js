import React, { Component } from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

export default class Experience extends Component {

    render() {
        return(
            <div id="portfolio"
                style={{ width: '100%',
                    color: 'var(--black-color)'}}>
                <h2>Portfolio</h2>
                <Container className="no-padding">
                    <Row className="no-margin">
                        <Col lg={6} md={6} sm={12} style={{
                            marginTop: '30px',
                            textAlign: 'left'}} >
                            <p>I've done a few projects in college. The majority of them will be available in my github profile as soon as I end my masters degree. Till then the repositories will remain private. But one of these projects went online.</p>
                        </Col>
                        <Col lg={6} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>
                                    <i class="fas fa-external-link-alt" style={{marginRight:8}}></i>
                                    <a target="_blank" rel='noopener noreferrer' href="areyouok.earth" style={{
                                        color: '(var(--main-color))'
                                    }}>areyouok.earth</a>
                                </Card.Title>
                                <Card.Text>
                                    It is a site about the actual state of the environment, this state can be checked by year and country. Also, there are future predictions for the values shown.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>
                                    <i class="fas fa-external-link-alt" style={{marginRight:8}}></i>
                                    <a target="_blank" rel='noopener noreferrer' href="https://www.diogomoreira.me" style={{
                                        color: '(var(--main-color))'
                                    }}>diogomoreira.me</a>
                                </Card.Title>
                                <Card.Text>
                                    This site is just a presentation about me and my work as a freelancer, keep in mind that this isn't the final product. (Hosted in AWS)
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} md={6} sm={12} style={{
                            marginTop: '30px',
                            textAlign: 'left'}} >
                            <p>Late in 2019, as refered above, I took interest in joining the freelancer.com community to try and get more professional experience. For this I tried to create my own brand. Of course this project isn't close to being finished, but with college and other projects I didn't yet get the time to keep this going.</p>
                        </Col>
                        <Col lg={6} md={6} sm={12} style={{
                            marginTop: '30px',
                            textAlign: 'left'}} >
                            <p>As a normal student learniong a lot from the internet, I always had this need to try and repay the community. I'd do this by participating in forums and such. But then one day started my own youtube channel, with this same objective. I finished an HTML tutorial and started a CSS tutorial, but languages such as these ones are too exhaustive to explain and there are way better tutorials online. So I stopped. I'm took a step back, to learn more about video editing and finding new themes to talk about.</p>
                        </Col>
                        <Col lg={6} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>
                                    <i class="fas fa-external-link-alt" style={{marginRight:8}}></i>
                                    <a target="_blank" rel='noopener noreferrer' href="https://www.youtube.com/channel/UCLdpYjCW40qUPBalDGyDPHg" style={{
                                        color: '(var(--main-color))'
                                    }}>youtube.com</a>
                                </Card.Title>
                                <Card.Text>
                                    This youtube channel would also complemente my brand.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>
                                    <i class="fas fa-external-link-alt" style={{marginRight:8}}></i>
                                    <a target="_blank" rel='noopener noreferrer' href="https://www.mcavadasmoreira.com/" style={{
                                        color: '(var(--main-color))'
                                    }}>mcavadasmoreira.com</a>
                                </Card.Title>
                                <Card.Text>
                                    This site is for a carpentry. (Hosted in AWS)
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} md={6} sm={12} style={{
                            marginTop: '30px',
                            textAlign: 'left'}} >
                            <p>Last summer I've made this website for my father's business. Everything is online and working but the process capability of the AWS free tier server is very little, so the gallery tab is extremelly slow, I still need to find a solution for this.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}