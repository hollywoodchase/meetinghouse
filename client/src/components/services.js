import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Col, Row, Container } from "../components/grid";
import axios from 'axios'

class Services extends Component {

    render() {
        return (
            <div>
                {/* //container row column */}
                <Container fluid>
                    <Row>
                        <Col size="md-12">
                            <header className="home App-header" id="nav-container">
                                <div className="home-col col-8" >
                                    <section className="home-section">
                                        <div className="welcome row">
                                            <h1>Let's transact</h1>
                                        </div>
                                    </section>

                                </div>
                            </header>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}
export default Services;