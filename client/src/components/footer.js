import React, { Component } from 'react'
import { Col, Container } from "../components/grid";
import '../App.css'

class Footer extends Component {

    render() {
        console.log(this.props);
        return (
            <div className="footer">
                <Container fluid className="footer-container">
                    <div className="footer-row row">
                        <Col size="md-6">
                            <h4 id="footer-text">Call or text us @<a href="tel:2677343419">267-734-3419</a></h4>
                        </Col>
                        <Col size="md-6">
                            <h4 id="footer-text">Email us @<a href = "mailto: meetinghousemovers@gmail.com">meetinghousemovers@gmail.com</a></h4>
                        </Col>
                    </div>
                </Container>
            </div>
        );
    }
}
export default Footer