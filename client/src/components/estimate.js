import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/grid";
import { TextArea } from "../components/form";
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router';
import FountainImage from "./fountainImage.js";
import DateSelector from "./date.js";
import "../App.css";

class Estimate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMoving: "",
      isPacking: "",
      isUnpacking: "",
      isMounting: "",
      isCrating: "",
      name: "",
      email: "",
      phone: "",
      details: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
  }



  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;



    if (name === 'moving' && this.state.isMoving) {
      this.state.isMoving = false;
    } else if (name === 'moving') {
      this.state.isMoving = true;
    } else if (name === 'packing' && this.state.isPacking) {
      this.state.isPacking = false;
    } else if (name === 'packing') {
      this.state.isPacking = true;
    } else if (name === 'unpacking' && this.state.isUnpacking) {
      this.state.isUnpacking = false;
    } else if (name === 'unpacking') {
      this.state.isUnpacking = true;
    } else if (name === 'mounting' && this.state.isMounting) {
      this.state.isMounting = false;
    } else if (name === 'mounting') {
      this.state.isMounting = true;
    } else if (name === 'crating' && this.state.isCrating) {
      this.state.isCrating = false;
    } else if (name === 'crating') {
      this.state.isCrating = true;
    }

    this.setState({
      [name]: value
    });

    console.log(this.state);
  };



  render() {
    const movingHidden = this.state.isMoving ? 'calendar row' : 'hidden';
    const notmovingHidden = this.state.isMoving ? 'hidden' : 'other-row row';
    const otherHidden = this.state.isMoving ? 'other-row row' : 'hidden';
    const servicesHidden = (this.state.isPacking || this.state.isUnpacking || this.state.isMounting || this.state.isCrating) && !this.state.isMoving ? 'services-calendar' : 'hidden';
    // const scrollHidden = !(this.state.isPacking || this.state.isUnpacking || this.state.isMounting || this.state.isCrating) || (this.state.isMoving && (this.state.isPacking || this.state.isUnpacking || this.state.isMounting || this.state.isCrating)) ? 'scroll-text row' : 'hidden';

    return (

      <Container fluid className='estimates-container'>
        {/* <Example /> */}
        <div className="form-rows row">
          <FountainImage />
          <div className="question-row row">
            <h1>Which service or services are you interested in?</h1>
          </div>
          <form id="form">
            <div className="moving-row row">
              <div className="moving-q">
                <input type="checkbox" id="moving-check" name="moving" value="moving" onClick={this.handleInputChange} />
                <label for="moving-check" className="moving-text">Moving - taking your stuff from A to B</label>
              </div>
              <div className={movingHidden}>
                <h2>When are you looking to move?</h2>
                <DateSelector />
              </div>
            </div>
            <div className="other-row row">
              <h2 className={notmovingHidden}>Not moving? Select a different service</h2>
              <h2 className={otherHidden}>Do you need any additional services?</h2>
            </div>
            <div className="checkboxes-row row">
              <div className="boxes">
                <div className="left-checks">
                  <input type="checkbox" id="packing-check" className="check" name="packing" value="packing" onClick={this.handleInputChange} />
                  <label for="packing-check" className="packing-text">Packing</label>

                  <input type="checkbox" id="unpacking-check" className="check" name="unpacking" value="unpacking" onClick={this.handleInputChange} />
                  <label for="unpacking-check" className="unpacking-text">Unpacking</label>
                </div>
                <div className={servicesHidden}>
                  <h5>When would you like to schedule this service?</h5>
                  <DateSelector />
                  {/* <div className="scroll-text">
                    <h4>Scroll Down</h4>
                    <h5>↓↓↓↓↓↓</h5>
                  </div> */}

                </div>
                {/* <div className={scrollHidden}>
                  <h4>Scroll Down</h4>
                  <h5>↓↓↓↓↓↓</h5>
                </div> */}

                <div className="right-checks">
                  <input type="checkbox" id="mounting-check" className="check" name="mounting" value="mounting" onClick={this.handleInputChange} />
                  <label for="mounting-check" className="mounting-text">Mounting</label>
                  <input type="checkbox" id="crating-check" className="check" name="crating" value="crating" onClick={this.handleInputChange} />
                  <label for="crating-check" className="crating-text">Crating</label>
                </div>
              </div>
            </div>
            <div className="details-row row">
              <div className="basicinfo-row row">
                <h2>Your Name</h2>
                <h2>Your Email</h2>
                <h2>Your Phone #</h2>
              </div>
              <div className="infoareas-row row">
                <TextArea
                  id="name"
                  name="name"
                  onChange={this.handleInputChange.bind(this)}
                  placeholder="First and Last Name"
                  required
                  value={this.state.name}
                  style={{ width: "100%" }}
                  rows={1}
                />
                <TextArea
                  id="email"
                  name="email"
                  onChange={this.handleInputChange.bind(this)}
                  placeholder="Enter email address"
                  required
                  value={this.state.email}
                  style={{ width: "100%" }}
                  rows={1}
                />
                <TextArea
                  id="phone"
                  name="phone"
                  onChange={this.handleInputChange.bind(this)}
                  placeholder="###-###-####"
                  required
                  value={this.state.phone}
                  style={{ width: "100%" }}
                  rows={1}
                />
              </div>
              <div className="details">

                <h2>Please provide as many details as possible about what items we will be working with</h2>
                <TextArea />
              </div>

            </div>
            <div className="btn-row row">
              <div className="button-div">
                <a className="submit-button" onClick={this.handleFormSubmit}>
                  <h4 className="button-text">Get Your Estimate</h4>
                </a>
              </div>
            </div>
          </form>
        </div>

      </Container >
    );
  }
}

export default withRouter(Estimate);