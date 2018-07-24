import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import Link from 'gatsby-link'
import Iframe from 'react-iframe'

const Project = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 style={{fontFamily:'Hedgenet'}}> Hedgenet Engineering project submission: How does it work ? </h1>
                    <p>
                        All projects start with a talk with one of our engineers.
                    </p>
                    <p>
                        Depending on your project complexity, this talk can last anywhere from 15 minutes to 90 minutes. The engineer will ask you about your
                        objectives and try to uncover as much information as possible about your project. You and the engineer will then agree on a date for the delivery of a
                        solution proposal, along with a cost evaluation for the implementation of the solution. Sometimes, it's even possible for our engineers to provide you with a proof of concept demo of the solution.
                    </p>
                    <p>
                        The project submission talk, as well as the solution proposal and cost evaluation are provided to you <em>completely free of charge</em>.
                        If you want to go ahead with the solution proposal and want us to implement it, our sales engineers will offer you the best cost structure (time and material, fixed cost etc.)
                        given the estimated cost of your project.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 style={{fontFamily:'Hedgenet'}}>Schedule your free talk with an Hedgenet Engineer</h1>
                    <p> Getting started on your project with Hedgenet Engineering is <em>fast</em> and <em>free </em>!
                    Go ahead and book your desired time for a call with one of our engineers:
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div style={{textAlign:'center', marginTop:'1rem'}}>
                    <Iframe url="https://calendly.com/hedgenetinfo"
							width="480px"
							height="850px"
							id="myId"
							display="initial"
							position="relative"
							allowFullScreen />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Project
