import React, { Component } from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

export default class Experience extends Component {

    render() {
        return(
            <div
                style={{ width: '100%',
                    color: 'var(--black-color)'}}>
                <h2>Experience</h2>
                <Container className="no-padding" style={{ marginBottom: '2em' }}>
                    <Row className="no-margin">
                        <Col lg={6} md={6} sm={12} >
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