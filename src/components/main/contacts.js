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
                        <Col lg={{ span: 4, offset: 2 }} md={{ span: 6, offset: 0 }} sm={12} style={{marginTop: '30px'}}>
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
                        <Col lg={{ span: 4, offset: 0 }} md={{ span: 6, offset: 0 }} sm={12} style={{marginTop: '30px'}}>
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