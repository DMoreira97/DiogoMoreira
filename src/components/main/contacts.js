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
                                <Card.Title>Portugal</Card.Title>
                                <Card.Text>
                                    So, could reposed contracts. As parent, the you for of seen in checkin they are being
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={4} sm={6} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Phone</Card.Title>
                                <Card.Text>
                                    So, could reposed contracts. As parent, the you for of seen in checkin they are being
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={4} sm={6} style={{marginTop: '30px'}}>
                            <Card style={{ width: '100%',
                                color: 'var(--black-color)' }}>
                                <Card.Body>
                                <Card.Title>Email</Card.Title>
                                <Card.Text>
                                    So, could reposed contracts. As parent, the you for of seen in checkin they are being
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