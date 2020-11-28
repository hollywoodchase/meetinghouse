import React, { useEffect, useState } from 'react';
import '../App.css';
import List from '../components/list';
import withListLoading from '../components/withListLoading';
import { Col, Row, Container } from "../components/grid";
import CityImage from "./cityImage.js";
import Icon from "./icon.js";
import ArchImage from "./archImage.js";
import axios from 'axios';
import { FormBtn } from "./form";

function App() {
  return (
    <div className='App'>
      <Container fluid className='home-container'>
        <div className="scroll-rows row">
          <ArchImage />
          <div className="button-row row">
            <h1 className="title-text">MeetingHouse Movers</h1>
            <a className="eButton" href="/estimate">
              <h4 className="button-text">Get an Estimate</h4>
            </a>
            <h3 className="tagline-text">We've Got You Covered</h3>
          </div>
          <div className="services-row">
            <h2 className="services-text">↓ Services We Provide ↓</h2>
            <h4>Click any service to learn more</h4>
          </div>
          <div className="descriptions-row row">
            <Col size="md-4">
              <div className="left-col card-col">
                <div className="card1 card">
                  <h5 className="service">Moving</h5>
                </div>
                <div className="card2 card">
                  <h5 className="service">Packing</h5>
                </div>
              </div>
            </Col>
            <Col size="md-4">
              <div className="mid-col card-col">
                <div className="card3 card">
                  <h5 className="service">Unpacking</h5>
                  {/* <Icon src={this.state.icon1} /> */}
                </div>
                <div className="card4 card">
                  <h5 className="service">Crating</h5>
                </div>
              </div>
            </Col>
            <Col size="md-4">
              <div className="right-col card-col">
                <div className="card5 card">
                  <h5 className="service">Mounting</h5>
                </div>
                <div className="card6 card">
                  <h5 className="service">Packing</h5>
                </div>
              </div>
            </Col>
          </div>
        </div>

        <div className="city-row row">
          <CityImage />
        </div>
      </Container>
    </div>
  );
}
export default App;