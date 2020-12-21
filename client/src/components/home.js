import React, { Component } from "react";
import '../App.css';
import { Col, Container } from "../components/grid";
import CityImage from "./cityImage.js";
import MovingIcon from "./icons/movingIcon";
import PackingIcon from "./icons/packingIcon";
import UnpackingIcon from "./icons/unpackingIcon";
import CratingIcon from "./icons/cratingIcon";
import MountingIcon from "./icons/mountingIcon";
import ArchImage from "./archImage.js";
import { withRouter } from 'react-router';
import { HashLink as Link } from 'react-router-hash-link';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Container fluid className='home-container'>
          <div className="scroll-rows row">
            <ArchImage />
            <div className="button-row row">
              <h1 className="title-text">Meetinghouse Movers</h1>
              <div className="button-div">
                <a className="eButton" href="/estimate">
                  <h4 className="button-text">Get an Estimate</h4>
                </a>
              </div>

              <h3 className="tagline-text">We've Got You Covered</h3>
            </div>
            <div className="services-row">
              <h2 className="services-text">↓ Services We Provide ↓</h2>
              <h4>Click any service to learn more</h4>
            </div>
            <div className="descriptions-row row">
              <Col size="md-4">
                <div className="left-col card-col">
                  <Link to="services#bigcard1">
                    <div className="card1 card">
                      <h5 className="service">Moving</h5>
                      <MovingIcon />
                    </div>
                  </Link>
                  <Link to="services#bigcard2">
                    <div className="card2 card">
                      <h5 className="service">Packing</h5>
                      <PackingIcon />
                    </div>
                  </Link>

                </div>
              </Col>
              <Col size="md-4">
                <div className="mid-col card-col">
                <Link to="services#bigcard3">
                    <div className="card3 card">
                      <h5 className="service">Unpacking</h5>
                      <UnpackingIcon />
                    </div>
                  </Link>
                </div>
              </Col>
              <Col size="md-4">
                <div className="right-col card-col">
                <Link to="services#bigcard4">
                    <div className="card4 card">
                      <h5 className="service">Mounting</h5>
                      <MountingIcon />
                    </div>
                  </Link>
                  <Link to="services#bigcard5">
                    <div className="card5 card">
                      <h5 className="service">Crating</h5>
                      <CratingIcon />
                    </div>
                  </Link>
                </div>
              </Col>
            </div>
          </div>
          <div className="city-row row">
            <CityImage />
          </div>
        </Container>
      </div >
    );
  }
}

export default withRouter(App);