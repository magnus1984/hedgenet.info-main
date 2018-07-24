import React from 'react'
import Link from 'gatsby-link'

import { Container, Col, Row } from 'reactstrap'
import { Button } from 'reactstrap'

import logo from '../media/hedgenet_logo.svg'


const IndexPage = () => (
    <Container>
        <Row>
            <Col>
                <div style={{textAlign:'center', marginTop:'2rem', fontFamily:'Hedgenet'}}>
                    <img src={logo} />
                    <h1 style={{fontSize:'4rem', marginBottom:'0'}}>
                        Hedgenet
                    </h1>
                    <p style={{fontSize:'2rem', marginTop:'0'}}>
                        scientia et pertinacia
                    </p>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div style={{padding:'0 100px 0 100px'}}>
                    <p>
                        Hedgenet Engineering is here for you when it's <em>urgent</em> to get things done.
                    </p>
                    <p>
                        We specialize in <em> ultra-fast </em> paced web application development using React.js and AWS as the target infrastructure.
                        All of our engineers are <a href="https://aws.amazon.com/certification/certified-solutions-architect-professional/">AWS Certified Solutions Architects</a>, so we can provide expertise for all your AWS engineering efforts.
                    </p>
                    <p>
                        Hedgenet is the <em>easiest, fastest and most cost-effective</em> way to turn an idea into a working software product. Get your idea off the ground today
                        by submitting a project to us.
                    </p>
                </div>
                <div style={{textAlign:'center', marginTop:'2rem'}}>
                  <Link to="/project/">
                    <Button style={{background:'black', border:'none'}}>
                        Submit a project
                    </Button>
                  </Link>
                </div>
            </Col>
        </Row>
    </Container>
)

export default IndexPage
