import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Col, Row, Container } from "../components/grid";
import axios from 'axios'
import BigMovingIcon from "./bigIcons/movingIcon";
import BigPackingIcon from "./bigIcons/packingIcon";
import BigUnpackingIcon from "./bigIcons/unpackingIcon";
import BigCratingIcon from "./bigIcons/cratingIcon";
import BigMountingIcon from "./bigIcons/mountingIcon";

class Services extends Component {

    render() {
        return (
            <div>
                {/* //container row column */}
                <Container fluid>
                    <div className="bigscroll-row row">
                        <div className="services-col bigcard-col">
                            <div className="bigcard bigcard1" id="bigcard1">
                                <BigMovingIcon />
                                <div className="text-area">
                                    <h3>Moving</h3>
                                    <p>Moving is when you move</p>
                                    <a className="services-button" href="/estimate">
                                        <h4 className="services-button-text">Get a Moving Estimate</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="bigcard bigcard2" id="bigcard2">
                                <BigPackingIcon />
                                <div className="text-area">
                                    <h3>Packing</h3>
                                    <p>Packing is when you pack</p>
                                    <a className="services-button" href="/estimate">
                                        <h4 className="services-button-text">Get a Packing Estimate</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="bigcard bigcard3" id="bigcard3">
                                <BigUnpackingIcon />
                                <div className="text-area">
                                    <h3>Unpacking</h3>
                                    <p>Unpacking is when you unpack</p>
                                    <a className="services-button" href="/estimate">
                                        <h4 className="services-button-text">Get an Unpacking Estimate</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="bigcard bigcard4" id="bigcard4">
                                <BigMountingIcon />
                                <div className="text-area">
                                    <h3>Mounting</h3>
                                    <p>Mounting is when you mount</p>
                                    <a className="services-button" href="/estimate">
                                        <h4 className="services-button-text">Get a Mounting Estimate</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="bigcard bigcard5" id="bigcard5">
                                <BigCratingIcon />
                                <div className="text-area">
                                    <h3>Crating</h3>
                                    <p>Crating is when you crate</p>
                                    <a className="services-button" href="/estimate">
                                        <h4 className="services-button-text">Get a Crating Estimate</h4>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </Container>

            </div>
        );
    }
}
export default Services;