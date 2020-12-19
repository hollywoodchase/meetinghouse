import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/grid";
import { TextArea } from "../components/form";
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router';
import FountainImage from "./fountainImage.js";
import DatePicker from "react-datepicker";
import { HashLink as Link } from 'react-router-hash-link';
import moment from 'moment';
import "../App.css";
import "react-datepicker/dist/react-datepicker.css";
import MagnifyingGlassIcon from "./icons/magnifyingglassIcon";

class Estimate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMoving: false,
      isPacking: false,
      isUnpacking: false,
      isMounting: false,
      isCrating: false,
      name: "",
      email: "",
      phone: "",
      details: "",
      returning: "",
      current: "",
      destination: "",
      controlledDate: new Date(),
      realDate: "",
      currentType: "",
      destinationType: "",
      currentElevator: "",
      destinationElevator: "",
      currentElevatorTime: "",
      destinationElevatorTime: ""
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDetailChange = this.handleDetailChange.bind(this);
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

  handleDateChange = (date) => {
    console.log("state: " + this.state.controlledDate);
    console.log(date);
    this.setState({
      controlledDate: date
    });
    this.state.realDate = date;
    console.log(this.state);
    // this.props.onSetProperty('startDate', newDate)
  }

  handleDetailChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    console.log("target: " + target);
    console.log("value: " + value);
    console.log("name: " + name);

    if (name === "returning") {
      this.state.returning = value;
    } else if (name === "currentElevator") {
      this.state.currentElevator = value;
    } else if (name === "current") {
      this.state.current = value;
    } else if (name === "destination") {
      this.state.destination = value;
    } else if (name === "currentType") {
      this.state.currentType = value;
    } else if (name === "destinationType") {
      this.state.destinationType = value;
    } else if (name === "currentElevator") {
      this.state.currentElevator = value;
    } else if (name === "destinationElevator") {
      this.state.destinationElevator = value;
    } else if (name = "currentElevatorTime") {
      this.state.currentElevatorTime = value;
    } else if (name = "destinationElevatorTime") {
      this.destinationElevatorTime = value;
    }

    this.setState({
      [name]: value
    });


    console.log(this.state);
  }


  handleFormSubmit = event => {
    event.preventDefault();
    console.log("submitted");
    console.log(this.state);
  }


  render() {
    const movingHidden = this.state.isMoving ? 'calendar row' : 'hidden';
    const notmovingHidden = this.state.isMoving ? 'hidden' : 'other-row row';
    const otherHidden = this.state.isMoving ? 'other-row row' : 'hidden';
    const servicesHidden = (this.state.isPacking || this.state.isUnpacking || this.state.isMounting || this.state.isCrating) && !this.state.isMoving ? 'services-calendar' : 'hidden';
    const extraHidden = (this.state.isPacking || this.state.isUnpacking || this.state.isMounting || this.state.isCrating) && this.state.isMoving ? 'extra-info row' : 'hidden';
    const movinginfoHidden = this.state.isMoving ? 'movinginfo-row row' : 'hidden';
    const movinginfotitleHidden = this.state.isMoving ? 'movinginfo-title row' : 'hidden';
    const currentElevatorTimeHidden = this.state.currentElevator ? 'infoq current-elevator-timeq row' : 'hidden';
    const destinationElevatorTimeHidden = this.state.destinationElevator ? 'infoq destination-elevator-timeq' : 'hidden';
    var newDate = new Date();
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
                <DatePicker className="date-picker" selected={this.state.controlledDate} onChange={this.handleDateChange.bind(this)} onSelect={date => console.log("on select" + date)} />
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
                  <DatePicker className="date-picker" selected={this.state.controlledDate} onChange={this.handleDateChange.bind(this)} onSelect={date => console.log("on select" + date)} />
                </div>
                <div className="right-checks">
                  <input type="checkbox" id="mounting-check" className="check" name="mounting" value="mounting" onClick={this.handleInputChange} />
                  <label for="mounting-check" className="mounting-text">Mounting</label>
                  <input type="checkbox" id="crating-check" className="check" name="crating" value="crating" onClick={this.handleInputChange} />
                  <label for="crating-check" className="crating-text">Crating</label>
                </div>
              </div>
            </div>
            <div className={extraHidden}>
              <h1>Remember:</h1>
              <ul>
                <li><Link to="services#bigcard2">Packing</Link> and <Link to="services#bigcard5">Crating</Link> will be scheduled about 1-2 days BEFORE the moving date</li>
                <li><Link to="services#bigcard3">Unpacking</Link> and <Link to="services#bigcard4">Mounting</Link> will be scheduled 1-2 days AFTER your moving date</li>
              </ul>
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
              <div className={movinginfotitleHidden}>
                <h1>We have a few questions...</h1><MagnifyingGlassIcon />
              </div>
              <div className={movinginfoHidden}>
                <div className="infoq returningq row">
                  <h2>Have you used our services in the past?</h2>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value={true}
                        name="returning"
                        default-checked={this.state.returning}
                        onChange={this.handleDetailChange}
                      />Yes
                  </label>
                    <br></br>
                    <label>
                      <input
                        type="radio"
                        value={false}
                        name="returning"
                        default-checked={!this.state.returning}
                        onChange={this.handleDetailChange}
                      />No
                  </label>
                  </div>
                </div>
                <div className="infoq addressq row">
                  <div className="current-add add">
                    <h2>Where are we moving you out of?</h2>
                    <TextArea
                      id="current"
                      name="current"
                      onChange={this.handleInputChange.bind(this)}
                      placeholder="Enter your CURRENT address"
                      required
                      value={this.state.current}
                      style={{ width: "100%" }}
                      rows={3}
                    />
                  </div>
                  <div className="destination-add add">
                    <h2>Where are we moving you to?</h2>
                    <TextArea
                      id="destination"
                      name="destination"
                      onChange={this.handleInputChange.bind(this)}
                      placeholder="Enter your NEW address"
                      value={this.state.destination}
                      style={{ width: "100%" }}
                      rows={3}
                    />
                  </div>
                </div>
                <div className="infoq current-typeq row">
                  <h2>Which of these best describes your CURRENT address?</h2>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        name="currentType"
                        value={"house"}
                        default-checked={this.state.currentType}
                        onChange={this.handleDetailChange}
                      />House
                  </label>
                    <br></br>
                    <label>
                      <input
                        type="radio"
                        value={"apartment"}
                        name="currentType"
                        default-checked={!this.state.currentType}
                        onChange={this.handleDetailChange}
                      />Apartment
                  </label>
                    <br></br>
                    <label>
                      <input
                        type="radio"
                        value={"office"}
                        name="currentType"
                        default-checked={!this.state.currentType}
                        onChange={this.handleDetailChange}
                      />Office Building
                  </label>
                  </div>
                </div>
                <div className="infoq current-floorq">
                  <h2>Which floor is your CURRENT address on?</h2>
                  <TextArea
                    id="currentFloor"
                    name="currentFloor"
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="##"
                    value={this.state.currentFloor}
                    style={{ width: "100%" }}
                    rows={1}
                  />
                </div>
                <div className="infoq current-elevatorq row">
                  <h2>Does your CURRENT address have an elevator?</h2>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value={true}
                        name="currentElevator"
                        default-checked={this.state.currentElevator}
                        onChange={this.handleDetailChange}
                      />Yes
                  </label>
                    <br></br>
                    <label>
                      <input
                        type="radio"
                        value={false}
                        name="currentElevator"
                        default-checked={!this.state.currentElevator}
                        onChange={this.handleDetailChange}
                      />No
                  </label>
                  </div>
                </div>
                <div className={'infoq current-elevator-timeq row'}>
                  <h2>(Optional) Is there a time restriction with the elevator?</h2>
                  <TextArea
                    id="currentElevatorTime"
                    name="currentElevatorTime"
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="Elevator time"
                    value={this.state.currentElevatorTime}
                    style={{ width: "100%" }}
                    rows={1}
                  />
                </div>
                <div className="infoq destination-typeq row">
                  <h2>Which of these best describes your NEW address?</h2>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value={"house"}
                        name="destinationType"
                        default-checked={this.state.destinationType}
                        onChange={this.handleDetailChange}
                      />House
                  </label>
                    <br></br>
                    <label>
                      <input
                        type="radio"
                        value={"apartment"}
                        name="destinationType"
                        default-checked={!this.state.destinationType}
                        onChange={this.handleDetailChange}
                      />Apartment
                  </label>
                    <br></br>
                    <label>
                      <input
                        type="radio"
                        value={"office"}
                        name="desinationType"
                        default-checked={!this.state.destinationType}
                        onChange={this.handleDetailChange}
                      />Office Building
                  </label>
                  </div>
                </div>
                <div className="infoq destination-floorq">

                </div>
                <div className="infoq detailsq">
                  <h2>Please provide as many details as possible about what items we will be working with</h2>
                  <TextArea className="details" />
                </div>
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