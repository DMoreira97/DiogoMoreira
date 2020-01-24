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
                        <Col lg={6} md={6} sm={12} style={{marginTop: '30px'}} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit. Sit amet cursus sit amet dictum sit amet justo. Risus pretium quam vulputate dignissim suspendisse in est ante in. Ut tortor pretium viverra suspendisse. Sed vulputate mi sit amet mauris. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Posuere ac ut consequat semper viverra nam libero justo laoreet. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Lorem mollis aliquam ut porttitor leo. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Quis commodo odio aenean sed adipiscing. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Maecenas sed enim ut sem. Ut ornare lectus sit amet est placerat in egestas erat.
                        Magna eget est lorem ipsum. Pretium aenean pharetra magna ac placerat vestibulum lectus. Sollicitudin aliquam ultrices sagittis orci. Porttitor rhoncus dolor purus non enim praesent. Quisque id diam vel quam elementum. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Pharetra pharetra massa massa ultricies mi quis. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Lobortis mattis aliquam faucibus purus. Sapien pellentesque habitant morbi tristique. Quis risus sed vulputate odio ut enim blandit. Id leo in vitae turpis massa sed elementum. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Elit eget gravida cum sociis. Sed blandit libero volutpat sed. Accumsan in nisl nisi scelerisque. In fermentum posuere urna nec tincidunt praesent semper feugiat. Volutpat consequat mauris nunc congue. Sit amet mattis vulputate enim nulla. Ut enim blandit volutpat maecenas volutpat.
                        </Col>
                        <Col lg={6} md={6} sm={12} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>FEUP - MIEIC</Card.Title>
                                <Card.Text>
                                    So, could reposed contracts. As parent, the you for of seen in checkin they are being
                                </Card.Text>
                                <ProgressBar now={90} label={`${90}%`} />
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
                                <ProgressBar now={90} label={`${90}%`} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}