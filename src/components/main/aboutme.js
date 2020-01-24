import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Me from '../resources/me.jpg'

export default class Aboutme extends Component {

    render() {
        return (
            <div
                style={{
                    width: '100%',
                    color: 'var(--black-color)',
                    marginTop: '64px'
                }}>
                <Container className="no-padding" style={{ marginBottom: '2em' }}>
                    <Row className="no-margin">
                        <Col xl={{span: 4, offset: 1}} lg={{span: 6, offset: 0}} md={{span: 8, offset: 2}} sm={12} >
                            <img src={Me} alt="me.jpg" style={{
                                width: '100%',
                                borderRadius: '50%'
                            }}></img>
                        </Col>
                        <Col xl={{span: 6, offset: 1}} lg={{span: 6, offset: 0}} md={12} sm={12} style={{
                            textAlign: 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div style={{width: '100%'}}> 
                                <h1>Hello! I'm Diogo Moreira</h1>
                                <h3>IT Student / Web Developer</h3>
                            </div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit. Sit amet cursus sit amet dictum sit amet justo. Risus pretium quam vulputate dignissim suspendisse in est ante in. Ut tortor pretium viverra suspendisse. Sed vulputate mi sit amet mauris. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Posuere ac ut consequat semper viverra nam libero justo laoreet. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Lorem mollis aliquam ut porttitor leo. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Quis commodo odio aenean sed adipiscing. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Maecenas sed enim ut sem. Ut ornare lectus sit amet est placerat in egestas erat.
                            Magna eget est lorem ipsum. Pretium aenean pharetra magna ac placerat vestibulum lectus.
                            <div className="networks" style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-around',
                                marginTop: '1em'
                            }}>
                                <a target="_blank" rel='noopener noreferrer' href="https://www.linkedin.com/" ><i class="fab fa-linkedin fa-lg"></i></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/"><i class="fab fa-github fa-lg"></i></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/"><i class="fab fa-facebook-square fa-lg"></i></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/"><i class="fab fa-instagram fa-lg"></i></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}