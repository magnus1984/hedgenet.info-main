import React from 'react'

import { Container, Row, Col } from 'reactstrap'
import { Button } from 'reactstrap'
import Link from 'gatsby-link'

const About = () => {
    return (

    <Container>
        <Row>
            <Col>
                <h1 style={{fontFamily:'Hedgenet'}}>About Hedgenet</h1>
            </Col>
        </Row>
        <Row>
            <Col>
                <p>
                    Hedgenet is an information technology company based in Montreal, Canada. Our main strength is our deep knowledge and experience with the AWS cloud platform.
                </p>
                <p>
                    If you need to talk to us directly, send us a message at info@hedgenet.info
                </p>
            </Col>
        </Row>
        <Row>
            <Col>
                <div style={{marginTop:'2rem'}}>
                    <Link to="/"><Button style={{background:'black', border:'none'}}>Home</Button></Link>
                </div>
            </Col>
        </Row>
    </Container>
    )
}

export default About
