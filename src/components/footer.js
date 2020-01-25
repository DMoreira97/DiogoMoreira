import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default class Footer extends Component {

    render() {
        return (
            <footer
                style={{
                    width: '100%',
                    miHeight: '64px',
                    backgroundColor: 'var(--main-color)',
                    color: 'var(--white-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: 'calc(10% + 64px)',
                    paddingRight: '10%',
                    boxSizing: 'border-box',
                }}>
                <Container className="no-padding">
                    <Row className="no-margin">
                        <Col lg={4} md={4} sm={6} style={{textAlign: 'center'}}>
                           I'd love to hear from you.
                        </Col>
                        <Col lg={4} md={4} sm={6} style={{textAlign: 'center', wordWrap: 'break-word'}}>
                            dmoreira97.github.io/DiogoMoreira/ &copy;2020
                            
                        </Col>
                        <Col lg={4} md={4} sm={6} style={{textAlign: 'center'}}>
                            <a href="#home" style={{color: 'white'}}><i class="fas fa-chevron-circle-up" style={{ fontSize: '1.75em' }}></i></a>                            
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}