import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Me from '../resources/me.png'

export default class Aboutme extends Component {

    render() {
        return(
            <div
                style={{ width: '100%',
                    color: 'var(--black-color)',
                    marginTop: '64px'}}>
                <Container className="no-padding" style={{ marginBottom: '2em' }}>
                    <Row>
                        <Col lg={6} md={6} sm={12} >
                            <img src={Me}  alt="me.jpg" style={{width:'100%',
                        borderRadius: '50%'}}></img>
                        </Col>
                        <Col lg={6} md={6} sm={12} style={{textAlign:'left'}}>
                        <h1>Hello! I'm Diogo Moreira</h1>
                        <h3>IT Student / Web Developer</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit. Sit amet cursus sit amet dictum sit amet justo. Risus pretium quam vulputate dignissim suspendisse in est ante in. Ut tortor pretium viverra suspendisse. Sed vulputate mi sit amet mauris. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Posuere ac ut consequat semper viverra nam libero justo laoreet. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Lorem mollis aliquam ut porttitor leo. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Quis commodo odio aenean sed adipiscing. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Maecenas sed enim ut sem. Ut ornare lectus sit amet est placerat in egestas erat.
                        Magna eget est lorem ipsum. Pretium aenean pharetra magna ac placerat vestibulum lectus.</Col>
                    </Row>
                </Container>
            </div>
        )
    }
}