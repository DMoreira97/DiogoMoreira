import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default class Experience extends Component {

    render() {
        return(
            <div id="contacts"
                style={{ width: '100%',
                    color: 'var(--black-color)'}}>
                <h2>Contacts</h2>
                <Container className="no-padding">
                    <Row className="no-margin">
                        <Col lg={4} md={4} sm={6} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title><i className="fas fa-envelope"></i></Card.Title>
                                <Card.Text>
                                    diogom.o.moreira@gmail.com
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={4} sm={6} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title><i className="fas fa-mobile-alt"></i></Card.Title>
                                <Card.Text>
                                    (+ 351) 917 540 759
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={4} sm={6} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title><i className="fas fa-map-marker-alt"></i></Card.Title>
                                <Card.Text>
                                    Currently living in Portugal, but free to work overseas
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