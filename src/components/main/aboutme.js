import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Me from '../resources/me.jpg'

export default class Aboutme extends Component {

    render() {
        return (
            <div id="aboutme"
                style={{
                    width: '100%',
                    color: 'var(--black-color)'
                }}>
                <Container className="no-padding" style={{ marginBottom: '2em' }}>
                    <Row className="no-margin">
                        <Col xl={{ span: 4, offset: 1 }} lg={{ span: 6, offset: 0 }} md={{ span: 8, offset: 2 }} sm={12} >
                            <img src={Me} alt="me.jpg" style={{
                                width: '100%',
                                borderRadius: '50%'
                            }}></img>
                        </Col>
                        <Col xl={{ span: 6, offset: 1 }} lg={{ span: 6, offset: 0 }} md={12} sm={12} style={{
                            textAlign: 'left',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div style={{
                                width: '100%',
                                marginBottom: '1em'
                            }}>
                                <h1 style={{
                                    fontFamily: 'Montserrat,sans-serif',
                                    fontWeight: 700
                                }}>I'm Diogo Moreira</h1>
                                <h3 style={{
                                    fontFamily: 'Montserrat,sans-serif',
                                    fontWeight: 700
                                }}>IT Student / Web Developer</h3>
                            </div>
                            <p>
                                Hello! My name is Diogo Moreira and I am wholly an ambitious person. As you will see below, I've joinned some associations, and in each one of them I always tried to take it up a notch each year. This meaning I always tried to go up in the ranks of every asssociation, and doing so I learned a lot.
                                Also the constant pressure of my master's degree obligated me to have an excellent time management. I was able to study and work at the same time for the majority of my degree, which is almost over.
                                And of course I also have an impeccable social life! Spending time with friends and familly is, for me, one of the most important things in my life.
                                <br />
                                <br />
                                All of this educated me on how to be a good professional having attributes such as: Dedication and drive as an hard-working individual; Versatile and able to adapt within an high-pressured emvironment; Developed comunication, team-building and leadership skills; Ability to manage multiple tasks in multiple different projects.
                            </p>
                            <div className="networks" style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-around',
                                marginTop: '1em',
                                fontSize: '1.75em'
                            }}>
                                <a target="_blank" rel='noopener noreferrer' href="https://www.linkedin.com/in/diogom-o-moreira" ><i class="fab fa-linkedin"></i></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/DMoreira97"><i class="fab fa-github"></i></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/diogom.o.moreira"><i class="fab fa-facebook-square"></i></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/the_king_pong"><i class="fab fa-instagram"></i></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://lichess.org/@/The_King_Chess"><i class="fas fa-chess-knight"></i></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}