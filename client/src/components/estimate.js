import React, { Component } from "react";
import { Container } from "../components/grid";
import { TextArea } from "../components/form";
import { withRouter } from 'react-router';
import FountainImage from "./fountainImage.js";
import DatePicker from "react-datepicker";
import { HashLink as Link } from 'react-router-hash-link';
import emailjs from 'emailjs-com';
import moment from 'moment';
import "../App.css";
import "react-datepicker/dist/react-datepicker.css";
import MagnifyingGlassIcon from "./icons/magnifyingglassIcon";

class Estimate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controlledDate: new Date(),
      isMoving: false,
      isPacking: false,
      isUnpacking: false,
      isMounting: false,
      isCrating: false,
      name: "",
      email: "",
      phone: "",
      realDate: "",
      returning: "",
      current: "",
      currentType: "",
      currentFloor: "",
      currentElevator: "",
      currentElevatorTime: "",
      currentBedrooms: "",
      destination: "",
      destinationType: "",
      destinationFloor: "",
      destinationElevator: "",
      destinationElevatorTime: "",
      special: "",
      boxes: "",
      details: ""
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDetailChange = this.handleDetailChange.bind(this);
  }

  componentDidMount() {
  }

  sendMessage(event) {
    event.preventDefault();
  }


  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;



    if (name === 'moving') {
      this.setState({
        isMoving: value
      });
      // this.state.isMoving = false;
    } else if (name === 'packing') {
      this.setState({
        isPacking: value
      });
    } else if (name === 'unpacking') {
      this.setState({
        isUnpacking: value
      });
    } else if (name === 'mounting') {
      this.setState({
        isMounting: value
      });
    } else if (name === 'crating' && this.state.isCrating) {
      this.setState({
        isCrating: value
      });
    } 

    this.setState({
      [name]: value
    });

    console.log(this.state);
  };

  handleDateChange = (date) => {
    console.log("state: " + this.state.controlledDate);
    console.log(date);
    var dateFormatted = moment(date).format("MM-DD-YYYY"); 
    this.setState({
      controlledDate: date,
      realDate: dateFormatted
    });
    // this.state.realDate = date;
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
      this.setState({
        returning: value
      });
      // this.state.returning = value;
    } else if (name === "currentElevator") {
      this.setState({
        currentElevator: value
      });
      // this.state.currentElevator = value;
    } else if (name === "current") {
      this.setState({
        current: value
      });
      // this.state.current = value;
    } else if (name === "destination") {
      this.setState({
        destination: value
      });
      // this.state.destination = value;
    } else if (name === "currentType") {
      this.setState({
        currentType: value
      });
      // this.state.currentType = value;
    } else if (name === "destinationType") {
      this.setState({
        destinationType: value
      });
    } else if (name === "currentFloor") {
      this.setState({
        currentType: value
      });
      // this.state.destinationType = value;
    } else if (name === "currentElevator") {
      this.setState({
        currentElevator: value
      });
      // this.state.currentElevator = value;
    } else if (name === "currentType") {
      this.setState({
        currentType: value
      });
    } else if (name === "destinationElevator") {
      this.setState({
        destinationElevator: value
      });
      // this.state.destinationElevator = value;
    } else if (name === "currentElevatorTime") {
      this.setState({
        currentElevatorTime: value
      });
      // this.state.currentElevatorTime = value;
    } else if (name === "destinationElevatorTime") {
      this.setState({
        destinationElevatorTime: value
      });
      // this.destinationElevatorTime = value;
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

    var templateParams = {
      controlledDate: new Date(),
      isMoving: this.state.isMoving,
      isPacking: this.state.isPacking,
      isUnpacking: this.state.isUnpacking,
      isMounting: this.state.isMounting,
      isCrating: this.state.isCrating,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      realDate: this.state.realDate,
      returning: this.state.returning,
      current: this.state.current,
      currentType: this.state.currentType,
      currentFloor: this.state.currentFloor,
      currentElevator: this.state.currentElevator,
      currentElevatorTime: this.state.currentElevatorTime,
      currentBedrooms: this.state.currentBedrooms,
      destination: this.state.destination,
      destinationType: this.state.destinationType,
      destnationFloor: this.state.destinationFloor,
      destinationElevator: this.state.destinationElevator,
      destinationElevatorTime: this.state.destinationElevatorTime,
      special: this.state.special,
      boxes: this.state.boxes,
      details: this.state.details
    };

    emailjs.send('service_sjr0rtg', 'template_6anpryf', templateParams, "user_qTQVb1Mi2sLqR3u3F6FM2")
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (err) {
        console.log('FAILED...', err);
      });
  }


  render() {
    const movingHidden = this.state.isMoving ? 'calendar row' : 'hidden';
    const notmovingHidden = this.state.isMoving ? 'hidden' : 'other-row row';
    const otherHidden = this.state.isMoving ? 'other-row row' : 'hidden';
    const servicesHidden = (this.state.isPacking || this.state.isUnpacking || this.state.isMounting || this.state.isCrating) && !this.state.isMoving ? 'services-calendar' : 'hidden';
    const extraHidden = (this.state.isPacking || this.state.isUnpacking || this.state.isMounting || this.state.isCrating) && this.state.isMoving ? 'extra-info row' : 'hidden';
    const movinginfoHidden = this.state.isMoving ? 'movinginfo-row row' : 'hidden';
    const movinginfotitleHidden = this.state.isMoving ? 'movinginfo-title row' : 'hidden';
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
                <label htmlFor="moving-check" className="moving-text">Moving - taking your stuff from A to B</label>
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
                  <label htmlFor="packing-check" className="packing-text">Packing</label>

                  <input type="checkbox" id="unpacking-check" className="check" name="unpacking" value="unpacking" onClick={this.handleInputChange} />
                  <label htmlFor="unpacking-check" className="unpacking-text">Unpacking</label>
                </div>
                <div className={servicesHidden}>
                  <h5>When would you like to schedule this service?</h5>
                  <DatePicker className="date-picker" selected={this.state.controlledDate} onChange={this.handleDateChange.bind(this)} onSelect={date => console.log("on select" + date)} />
                </div>
                <div className="right-checks">
                  <input type="checkbox" id="mounting-check" className="check" name="mounting" value="mounting" onClick={this.handleInputChange} />
                  <label htmlFor="mounting-check" className="mounting-text">Mounting</label>
                  <input type="checkbox" id="crating-check" className="check" name="crating" value="crating" onClick={this.handleInputChange} />
                  <label htmlFor="crating-check" className="crating-text">Crating</label>
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
                <br></br>
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
                <br></br>
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
                <br></br>
                <div className="infoq infoq-white current-floorq">
                  <h2>How many flights of stairs will we be climbing at your CURRENT address?</h2>
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
                <br></br>
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
                <br></br>
                <div className={'infoq infoq-white current-elevator-timeq row'}>
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
                <br></br>
                <div className="infoq current-bedroomsq row">
                  <h2>How many bedrooms does your CURRENT address have?</h2>
                  <TextArea
                    id="currentBedrooms"
                    name="currentBedrooms"
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="##"
                    value={this.state.currentBedrooms}
                    style={{ width: "100%" }}
                    rows={1}
                  />
                </div>
                <br></br>
                <div className="infoq infoq-white destination-typeq row">
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
                <br></br>
                <div className="infoq destination-floorq">
                  <h2>How many flights of stairs will we be climbing at your NEW address?</h2>
                  <TextArea
                    id="destinationFloor"
                    name="destinationFloor"
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="##"
                    value={this.state.destinationFloor}
                    style={{ width: "100%" }}
                    rows={1}
                  />
                </div>
                <br></br>
                <div className="infoq infoq-white destination-elevatorq row">
                  <h2>Does your NEW address have an elevator?</h2>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value={true}
                        name="destinationElevator"
                        default-checked={this.state.destinationElevator}
                        onChange={this.handleDetailChange}
                      />Yes
                  </label>
                    <br></br>
                    <label>
                      <input
                        type="radio"
                        value={false}
                        name="destinationElevator"
                        default-checked={!this.state.destinationElevator}
                        onChange={this.handleDetailChange}
                      />No
                  </label>
                  </div>
                </div>
                <br></br>
                <div className={'infoq destination-elevator-timeq row'}>
                  <h2>(Optional) Is there a time restriction with the elevator?</h2>
                  <TextArea
                    id="destinationElevatorTime"
                    name="destinationElevatorTime"
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="Elevator time"
                    value={this.state.destinationElevatorTime}
                    style={{ width: "100%" }}
                    rows={1}
                  />
                </div>
                <br></br>
                <div className="infoq boxesq">
                  <h2>About how many boxes will we be moving?</h2>
                  <TextArea
                    id="boxes"
                    name="boxes"
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="##"
                    value={this.state.boxes}
                    style={{ width: "100%" }}
                    rows={1}
                  />
                </div>
              </div>
              <br></br>
              <div className="infoq infoq-white specialq">
                <h2>Are there any items that need special care?</h2>
                <TextArea
                  id="special"
                  name="special"
                  onChange={this.handleInputChange.bind(this)}
                  placeholder="Special care items"
                  value={this.state.special}
                  style={{ width: "100%" }}
                  rows={3}
                />
              </div>
              <br></br>
              <div className="infoq detailsq">
                <h2>Is there anything else we should know about the move?</h2>
                <TextArea
                  id="details"
                  name="details"
                  onChange={this.handleInputChange.bind(this)}
                  placeholder="Details"
                  value={this.state.details}
                  style={{ width: "100%" }}
                  rows={3}
                />
              </div>
            </div>
            <div className="btn-row row">
              <div className="button-div">
                <a className="submit-button" href="." onClick={this.handleFormSubmit}>
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