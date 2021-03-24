import React, { Component } from "react";
import { Container } from "../components/grid";
import { TextArea } from "../components/form";
import { withRouter } from 'react-router';
import FountainImage from "./fountainImage.js";
import SmallLogoImage from "./smallLogoImage.js";
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
      controlledDate2: new Date(),
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
      currentElevatorQ: "",
      currentElevatorTime: "",
      currentOffices: "",
      currentBedrooms: "",
      bedroom1: "",
      bedroom2: "",
      livingroom: "",
      kitchen: "",
      basement: "",
      outdoor: "",
      bedroom3: "",
      bedroom4: "",
      storage: "",
      destination: "",
      destinationType: "",
      destinationFloor: "",
      destinationElevator: "",
      destinationElevatorQ: "",
      destinationElevatorTime: "",
      special: "",
      boxes: "",
      unpackBoxes: "",
      details: "",
      packBedrooms: "",
      unpackBedrooms: "",
      isMovingQ: "",
      isPackingQ: "",
      isUnpackingQ: "",
      isMountingQ: "",
      isCratingQ: ""
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSecondDateChange = this.handleSecondDateChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDetailChange = this.handleDetailChange.bind(this);
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (name === 'moving') {
      this.setState({
        isMoving: value
      });
      if (value) {
        this.setState({
          isMovingQ: "X"
        });
      } else if (!value) {
        this.setState({
          isMovingQ: "No"
        });
      }
    } else if (name === 'packing') {
      this.setState({
        isPacking: value
      });
      if (value) {
        this.setState({
          isPackingQ: "X"
        });
      } else if (!value) {
        this.setState({
          isPackingQ: "No"
        });
      }
    } else if (name === 'unpacking') {
      this.setState({
        isUnpacking: value
      });
      if (value) {
        this.setState({
          isUnpackingQ: "X"
        });
      } else if (!value) {
        this.setState({
          isUnpackingQ: "No"
        });
      }
    } else if (name === 'mounting') {
      this.setState({
        isMounting: value
      });
      if (value) {
        this.setState({
          isMountingQ: "X"
        });
      } else if (!value) {
        this.setState({
          isMountingQ: "No"
        });
      }
    } else if (name === 'crating') {
      this.setState({
        isCrating: value
      });
      if (value) {
        this.setState({
          isCratingQ: "X"
        });
      } else if (!value) {
        this.setState({
          isCratingQ: "No"
        });
      }
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
    console.log(this.state);
  }
  handleSecondDateChange = (date) => {
    console.log(date);
    var dateFormatted = moment(date).format("MM-DD-YYYY");

    this.setState({
      controlledDate2: date,
      secondDate: dateFormatted
    });
    console.log(this.state);
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
    } else if (name === "current") {
      this.setState({
        current: value
      });
    } else if (name === "destination") {
      this.setState({
        destination: value
      });
    } else if (name === "currentType") {
      this.setState({
        currentType: value
      });
    } else if (name === "destinationType") {
      this.setState({
        destinationType: value
      });
    } else if (name === "currentFloor") {
      this.setState({
        currentFloor: value
      });
    } else if (name === "currentElevator") {
      this.setState({
        currentElevator: value
      });
      if (value === "true") {
        this.setState({
          currentElevatorQ: "Yes"
        });
      } else if (value === "false") {
        this.setState({
          currentElevatorQ: "No"
        });
      }
    } else if (name === "currentType") {
      this.setState({
        currentType: value
      });
    } else if (name === "destinationElevator") {
      this.setState({
        destinationElevator: value
      });
      if (value === "true") {
        console.log(value);
        this.setState({
          destinationElevatorQ: "Yes"
        });
      } else if (value === "false") {
        console.log(value);
        this.setState({
          destinationElevatorQ: "No"
        });
      }
    } else if (name === "currentElevatorTime") {
      this.setState({
        currentElevatorTime: value
      });
    } else if (name === "destinationElevatorTime") {
      this.setState({
        destinationElevatorTime: value
      });
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
      controlledDate2: new Date(),
      isMoving: this.state.isMoving,
      isMovingQ: this.state.isMovingQ,
      isPacking: this.state.isPacking,
      isPackingQ: this.state.isPackingQ,
      isUnpacking: this.state.isUnpacking,
      isUnpackingQ: this.state.isUnpackingQ,
      isMounting: this.state.isMounting,
      isMountingQ: this.state.isMountingQ,
      isCrating: this.state.isCrating,
      isCratingQ: this.state.isCratingQ,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      realDate: this.state.realDate,
      secondDate: this.state.secondDate,
      returning: this.state.returning,
      current: this.state.current,
      currentType: this.state.currentType,
      currentFloor: this.state.currentFloor,
      currentElevator: this.state.currentElevator,
      currentElevatorQ: this.state.currentElevatorQ,
      currentElevatorTime: this.state.currentElevatorTime,
      currentOffices: this.state.currentOffices,
      currentBedrooms: this.state.currentBedrooms,
      bedroom1: this.state.bedroom1,
      bedroom2: this.state.bedroom2,
      livingroom: this.state.livingroom,
      kitchen: this.state.kitchen,
      basement: this.state.basement,
      outdoor: this.state.outdoor,
      bedroom3: this.state.bedroom3,
      bedroom4: this.state.bedroom4,
      storage: this.state.storage,
      destination: this.state.destination,
      destinationType: this.state.destinationType,
      destinationFloor: this.state.destinationFloor,
      destinationElevator: this.state.destinationElevator,
      destinationElevatorQ: this.state.destinationElevatorQ,
      destinationElevatorTime: this.state.destinationElevatorTime,
      special: this.state.special,
      boxes: this.state.boxes,
      unpackBoxes: this.state.unpackBoxes,
      details: this.state.details,
      packBedrooms: this.state.packBedrooms,
      unpackBedrooms: this.state.unpackBedrooms,
      mountDetails: this.state.mountDetails,
      crateDetails: this.state.crateDetails
    };

    emailjs.send('service_sjr0rtg', 'template_6anpryf', templateParams, "user_qTQVb1Mi2sLqR3u3F6FM2")
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (err) {
        console.log('FAILED...', err);
      });

    alert("Your estimate has been submitted! We will respond in the next 24 hours");
    window.location.reload();
  }


  render() {
    const movingHidden = this.state.isMoving ? 'calendar row' : 'hidden';
    const notmovingHidden = this.state.isMoving ? 'hidden' : 'other-row row';
    const otherHidden = this.state.isMoving ? 'other-row row' : 'hidden';
    const servicesHidden = (this.state.isPacking || this.state.isUnpacking || this.state.isMounting || this.state.isCrating) && !this.state.isMoving ? 'services-calendar' : 'hidden';
    const extraHidden = (this.state.isPacking || this.state.isUnpacking || this.state.isMounting || this.state.isCrating) && this.state.isMoving ? 'extra-info row' : 'hidden';
    const movinginfoHidden = this.state.isMoving ? 'movinginfo-row row' : 'hidden';
    const movinginfotitleHidden = this.state.isMoving || this.state.isPacking || this.state.isUnpacking || this.state.isMounting || this.state.isCrating ? 'movinginfo-title row' : 'hidden';
    const otherInfoHidden = this.state.isPacking || this.state.isUnpacking || this.state.isMounting || this.state.isCrating || this.state.isMoving ? 'otherinfo-row row' : 'hidden';
    const packHidden = this.state.isPacking ? 'pack-row row' : 'hidden';
    const unpackHidden = this.state.isUnpacking ? 'unpack-row row' : 'hidden';
    const mountHidden = this.state.isMounting ? 'mount-row row' : 'hidden';
    const mountDetailsHidden = this.state.isMounting ? 'infoq mount-detailsq row' : 'hidden';
    const mountAddressHidden = this.state.isMounting && (!this.state.isMoving && !this.state.isUnpacking) ? ' infoq mount-addressq row' : 'hidden';
    const crateHidden = this.state.isCrating ? 'crate-row row' : 'hidden';
    const crateAddressHidden = this.state.isCrating && !this.state.isMoving && !this.state.isPacking ? 'infoq crate-addressq' : 'hidden';
    const destinationElevatorTimeHidden = this.state.destinationElevator === "true" ? 'infoq destination-elevator-timeq row' : 'hidden';
    const destinationFloorHidden = this.state.destinationElevator === "false" ? "infoq destination-floorq row" : 'hidden';
    const currentElevatorTimeHidden = this.state.currentElevator === "true" ? 'infoq current-elevator-timeq row' : 'hidden';
    const currentFloorHidden = this.state.currentElevator === "false" || this.state.currentType === "house" ? "infoq current-floorq row" : 'hidden';
    const movingDetailsHidden = this.state.isMoving ? 'infoq detailsq' : 'hidden';
    const boxesHidden = this.state.isPacking ? 'hidden' : 'infoq boxesq';
    const packSpecialHidden = this.state.isPacking && !this.state.isMoving && (this.state.isUnpacking || this.state.isCrating || this.state.isMounting) ? "infoq pack-specialq" : 'hidden';
    const unpackSpecialHidden = this.state.isUnpacking && !this.state.isMoving && (this.state.isPacking || this.state.isCrating || this.state.isMounting) ? "infoq unpack-specialq" : 'hidden';
    const packAddressHidden = this.state.isMoving && this.state.isPacking ? 'hidden' : "infoq pack-addressq row";
    const packBedroomsHidden = this.state.isMoving && this.state.isPacking ? 'hidden' : "infoq pack-bedroomsq row";
    const unpackBedroomsHidden = this.state.isMoving && this.state.isUnpacking ? 'hidden' : "infoq unpack-bedroomsq row";
    const unpackAddressHidden = this.state.isMoving && this.state.isUnpacking ? 'hidden' : "infoq unpack-addressq row";
    const multipleServicesHidden = (this.state.isPacking || this.state.isCrating) && (this.state.isUnpacking || this.state.isMounting) && !this.state.isMoving ? 'services-calendar' : 'hidden';
    const unpackBoxesHidden = this.state.isUnpacking && (!this.state.isMoving && !this.state.isPacking) ? 'unpack-boxesq' : 'hidden';
    const mmcDetailsHidden = this.state.isMoving && this.state.isMounting && this.state.isCrating ? 'infoq detailsq' : 'hidden';
    const mumDetailsHidden = this.state.isMoving && this.state.isUnpacking && this.state.isMounting && !this.state.isCrating ? 'infoq detailsq' : 'hidden';
    const packMoveHidden = this.state.isMoving && this.state.isPacking ? 'hidden' : "infoq pack-detailsq";
    // const leftChecksHidden = this.state.isMoving ? "left-checks" : 'hidden';
    const officesHidden = this.state.currentType === "office" ? "infoq current-officesq row" : "hidden";
    const storageHidden = this.state.currentType === "storage" ? "infoq current-storageq row" : "hidden";
    const currentBedroomsHidden = this.state.currentType === "house" || this.state.currentType === "apartment" ? "infoq current-bedroomsq row" : "hidden";
    const inventory1BHidden = this.state.currentBedrooms === "1" ? "infoq inventory1bq row" : "hidden";
    const inventory2BHidden = this.state.currentBedrooms === "2" ? "infoq inventory2bq row" : "hidden";
    const inventory3BHidden = this.state.currentBedrooms === "3" ? "infoq inventory3bq row" : "hidden";
    const inventory4BHidden = this.state.currentBedrooms === "4+" ? "infoq inventory4bq row" : "hidden";
    const currentElevatorHidden = this.state.currentType === "apartment" || this.state.destinationType === "office" || this.state.destinationType === "storage" ? "infoq current-elevatorq row" : "hidden";
    const destinationElevatorHidden = this.state.destinationType === "apartment" || this.state.destinationType === "office" || this.state.destinationType === "storage" ? "infoq destination-elevatorq row" : "hidden";
    const offices1oHidden = this.state.currentOffices === "1" ? "infoq offices1oq row" : "hidden";
    const offices2oHidden = this.state.currentOffices === "2" ? "infoq offices2oq row" : "hidden";
    const offices3oHidden = this.state.currentOffices === "3" ? "infoq offices3oq row" : "hidden";

    return (

      <Container fluid className='estimates-container'>
        <div className="form-rows row">
          <SmallLogoImage />
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
                <div className={multipleServicesHidden}>
                  <h5>When would you like to schedule the second day of service?</h5>
                  <DatePicker className="date-picker2" selected={this.state.controlledDate2} onChange={this.handleSecondDateChange.bind(this)} onSelect={date => console.log("on select" + date)} />
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
                  style={{ width: "25vw" }}
                  rows={1}
                />
                <TextArea
                  id="email"
                  name="email"
                  onChange={this.handleInputChange.bind(this)}
                  placeholder="Enter email address"
                  required
                  value={this.state.email}
                  style={{ width: "25vw" }}
                  rows={1}
                />
                <TextArea
                  id="phone"
                  name="phone"
                  onChange={this.handleInputChange.bind(this)}
                  placeholder="###-###-####"
                  required
                  value={this.state.phone}
                  style={{ width: "25vw" }}
                  rows={1}
                />
              </div>
              <div className={movinginfotitleHidden}>
                <h1>We have a few questions...</h1><MagnifyingGlassIcon />
              </div>
              <div className={otherInfoHidden}>
                <div className="infoq returningq row">
                  <h2>Have you used our services in the past?</h2>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        value={"Yes"}
                        name="returning"
                        default-checked={this.state.returning}
                        onChange={this.handleDetailChange}
                      />Yes
                  </label>
                    <br></br>
                    <label>
                      <input
                        type="radio"
                        value={"No"}
                        name="returning"
                        default-checked={!this.state.returning}
                        onChange={this.handleDetailChange}
                      />No
                  </label>
                  </div>
                </div>
                <div className={movinginfoHidden}>
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
                        style={{ width: "30vw" }}
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
                        style={{ width: "30vw" }}
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
                      <br></br>
                      <label>
                        <input
                          type="radio"
                          value={"storage"}
                          name="currentType"
                          default-checked={!this.state.currentType}
                          onChange={this.handleDetailChange}
                        />Storage Facility/Garage
                  </label>
                    </div>

                  </div>
                  <div className={storageHidden}>
                    <h2>What items are we taking from storage?</h2>
                    <div className="storageinventory-choices">
                      <TextArea
                        id="storage"
                        name="storage"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Storage Items"
                        value={this.state.storage}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                    </div>
                  </div>
                  <div className={officesHidden}>
                    <h2>How many offices are we moving?</h2>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          value={"1"}
                          name="currentOffices"
                          default-checked={this.state.currentOffices}
                          onChange={this.handleDetailChange}
                        />1
                  </label>
                      <br></br>
                      <label>
                        <input
                          type="radio"
                          value={"2"}
                          name="currentOffices"
                          default-checked={this.state.currentOffices}
                          onChange={this.handleDetailChange}
                        />2
                  </label>
                      <br></br>
                      <label>
                        <input
                          type="radio"
                          value={"3"}
                          name="currentOffices"
                          default-checked={this.state.currentOffices}
                          onChange={this.handleDetailChange}
                        />3+
                  </label>
                    </div>
                  </div>
                  <div className={offices1oHidden}>
                    <h2>What items are we taking from the office?</h2>
                    <div className="officeinventory-choices">
                      <TextArea
                        id="bedroom1"
                        name="bedroom1"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Bedroom #1 Items"
                        value={this.state.bedroom1}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                    </div>
                  </div>
                  <div className={offices2oHidden}>
                    <h2>What items are we taking from each office?</h2>
                    <div className="officeinventory-choices">
                      <TextArea
                        id="bedroom1"
                        name="bedroom1"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Office #1 Items"
                        value={this.state.bedroom1}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                      <TextArea
                        id="bedroom2"
                        name="bedroom2"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Office #2 Items"
                        value={this.state.bedroom2}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                    </div>
                  </div>
                  <div className={offices3oHidden}>
                    <h2>What items are we taking from each office?</h2>
                    <div className="officeinventory-choices">
                      <TextArea
                        id="bedroom1"
                        name="bedroom1"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Office #1 Items"
                        value={this.state.bedroom1}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                      <TextArea
                        id="bedroom2"
                        name="bedroom2"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Office #2 Items"
                        value={this.state.bedroom2}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                      <TextArea
                        id="bedroom3"
                        name="bedroom3"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Office #3 Items"
                        value={this.state.bedroom3}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                    </div>
                  </div>
                  <div className={currentElevatorHidden}>
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
                  <div className={currentFloorHidden}>
                    <h2>At your CURRENT address, how many steps are there to the top floor?</h2>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          value={"0-10"}
                          name="currentFloor"
                          default-checked={this.state.currentFloor}
                          onChange={this.handleDetailChange}
                        />0-10
                  </label>
                      <br></br>
                      <label>
                        <input
                          type="radio"
                          value={"10-20"}
                          name="currentFloor"
                          default-checked={this.state.currentFloor}
                          onChange={this.handleDetailChange}
                        />10-20
                  </label>
                      <br></br>
                      <label>
                        <input
                          type="radio"
                          value={"20-30"}
                          name="currentFloor"
                          default-checked={this.state.currentFloor}
                          onChange={this.handleDetailChange}
                        />20-30
                  </label>
                      <br></br>
                      <label>
                        <input
                          type="radio"
                          value={"30-40"}
                          name="currentFloor"
                          default-checked={this.state.currentFloor}
                          onChange={this.handleDetailChange}
                        />30-40
                  </label>
                      <br></br>
                      <label>
                        <input
                          type="radio"
                          value={"40-50"}
                          name="currentFloor"
                          default-checked={this.state.currentFloor}
                          onChange={this.handleDetailChange}
                        />40-50
                  </label>
                    </div>
                  </div>
                  <br></br>
                  <div className={currentElevatorTimeHidden}>
                    <h2>Is there a time restriction with the elevator?</h2>
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
                  <div className={currentBedroomsHidden}>
                    <h2>How many bedrooms worth of stuff does your CURRENT address have?</h2>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          value={"1"}
                          name="currentBedrooms"
                          default-checked={this.state.currentBedrooms}
                          onChange={this.handleDetailChange}
                        />1
                  </label>
                      <br></br>
                      <label>
                        <input
                          type="radio"
                          value={"2"}
                          name="currentBedrooms"
                          default-checked={!this.state.currentBedrooms}
                          onChange={this.handleDetailChange}
                        />2
                  </label>
                      <br></br>
                      <label>
                        <input
                          type="radio"
                          value={"3"}
                          name="currentBedrooms"
                          default-checked={!this.state.currentBedrooms}
                          onChange={this.handleDetailChange}
                        />3
                  </label>
                      <br></br>
                      <label>
                        <input
                          type="radio"
                          value={"4+"}
                          name="currentBedrooms"
                          default-checked={!this.state.currentBedrooms}
                          onChange={this.handleDetailChange}
                        />4+
                  </label>
                    </div>
                  </div>
                  <br></br>
                  <div className={inventory1BHidden}>
                    <h2>What items are we taking from each room?</h2>
                    <div className="inventory-choices inventory1B-choices">
                      <TextArea
                        id="bedroom1"
                        name="bedroom1"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Bedroom #1 Items"
                        value={this.state.bedroom1}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                      <TextArea
                        id="livingroom"
                        name="livingroom"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Living Room Items"
                        value={this.state.livingroom}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                      <TextArea
                        id="kitchen"
                        name="kitchen"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Kitchen/Dining Room Items"
                        value={this.state.kitchen}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                      <TextArea
                        id="basement"
                        name="basement"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Basement/Storage Items"
                        value={this.state.basement}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                      <TextArea
                        id="outdoor"
                        name="outdoor"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Outdoor Items"
                        value={this.state.outdoor}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                    </div>
                  </div>
                  <br></br>
                  <div className={inventory2BHidden}>
                    <h2>What items are we taking from each room?</h2>
                    <div className="inventory-choices inventory2B-choices">
                      <TextArea
                        id="bedroom1"
                        name="bedroom1"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Bedroom #1 Items"
                        value={this.state.bedroom1}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                      <TextArea
                        id="livingroom"
                        name="livingroom"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Living Room Items"
                        value={this.state.livingroom}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                      <TextArea
                        id="kitchen"
                        name="kitchen"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Kitchen/Dining Room Items"
                        value={this.state.kitchen}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                      <TextArea
                        id="basement"
                        name="basement"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Basement/Storage Items"
                        value={this.state.basement}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                      <TextArea
                        id="outdoor"
                        name="outdoor"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Outdoor Items"
                        value={this.state.outdoor}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                      <TextArea
                        id="bedroom2"
                        name="bedroom2"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Bedroom #2 Items"
                        value={this.state.bedroom2}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                    </div>
                  </div>
                  <div className={inventory3BHidden}>
                    <h2>What items are we taking from each room?</h2>
                    <div className="inventory-choices inventory3B-choices">
                      <TextArea
                        id="bedroom1"
                        name="bedroom1"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Bedroom #1 Items"
                        value={this.state.bedroom1}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                      <TextArea
                        id="livingroom"
                        name="livingroom"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Living Room Items"
                        value={this.state.livingroom}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                      <TextArea
                        id="kitchen"
                        name="kitchen"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Kitchen/Dining Room Items"
                        value={this.state.kitchen}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                      <TextArea
                        id="basement"
                        name="basement"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Basement/Storage Items"
                        value={this.state.basement}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                      <TextArea
                        id="outdoor"
                        name="outdoor"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Outdoor Items"
                        value={this.state.outdoor}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                      <TextArea
                        id="bedroom2"
                        name="bedroom2"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Bedroom #2 Items"
                        value={this.state.bedroom2}
                        style={{ width: "60vw" }}
                        rows={2}
                      />

                      <TextArea
                        id="bedroom3"
                        name="bedroom3"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Bedroom #3 Items"
                        value={this.state.bedrooms3}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                    </div>
                  </div>
                  <div className={inventory4BHidden}>
                    <h2>What items are we taking from each room?</h2>
                    <div className="inventory-choices inventory2B-choices">
                      <TextArea
                        id="bedroom1"
                        name="bedroom1"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Bedroom #1 Items"
                        value={this.state.bedroom1}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                      <TextArea
                        id="livingroom"
                        name="livingroom"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Living Room Items"
                        value={this.state.livingroom}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                      <TextArea
                        id="kitchen"
                        name="kitchen"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Kitchen/Dining Room Items"
                        value={this.state.kitchen}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                      <TextArea
                        id="basement"
                        name="basement"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Basement/Storage Items"
                        value={this.state.basement}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                      <TextArea
                        id="outdoor"
                        name="outdoor"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Outdoor Items"
                        value={this.state.outdoor}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                      <TextArea
                        id="bedroom2"
                        name="bedroom2"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Bedroom #2 Items"
                        value={this.state.bedroom2}
                        style={{ width: "60vw" }}
                        rows={2}
                      />

                      <TextArea
                        id="bedroom3"
                        name="bedroom3"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Bedroom #3 Items"
                        value={this.state.bedrooms3}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                      <TextArea
                        id="bedroom4"
                        name="bedroom4"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Bedroom #4 Items"
                        value={this.state.bedroom4}
                        style={{ width: "60vw" }}
                        rows={2}
                      />
                    </div>
                    <br></br>
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
                      <br></br>
                      <label>
                        <input
                          type="radio"
                          value={"storage"}
                          name="desinationType"
                          default-checked={!this.state.destinationType}
                          onChange={this.handleDetailChange}
                        />Storage Facility/Garage
                  </label>
                    </div>
                  </div>
                  <br></br>
                  <div className={destinationElevatorHidden}>
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
                  <div className={destinationFloorHidden}>
                    <h2>At your NEW address, how many steps are there to the top floor?</h2>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          value={"0-10"}
                          name="destinationFloor"
                          default-checked={this.state.destinationFloor}
                          onChange={this.handleDetailChange}
                        />0-10
                  </label>
                      <br></br>
                      <label>
                        <input
                          type="radio"
                          value={"10-20"}
                          name="destinationFloor"
                          default-checked={this.state.destinationFloor}
                          onChange={this.handleDetailChange}
                        />10-20
                  </label>
                      <br></br>
                      <label>
                        <input
                          type="radio"
                          value={"20-30"}
                          name="destinationFloor"
                          default-checked={this.state.destinationFloor}
                          onChange={this.handleDetailChange}
                        />20-30
                  </label>
                      <br></br>
                      <label>
                        <input
                          type="radio"
                          value={"30-40"}
                          name="destinationFloor"
                          default-checked={this.state.destinationFloor}
                          onChange={this.handleDetailChange}
                        />30-40
                  </label>
                      <br></br>
                      <label>
                        <input
                          type="radio"
                          value={"40-50"}
                          name="destinationFloor"
                          default-checked={this.state.destinationFloor}
                          onChange={this.handleDetailChange}
                        />40-50
                  </label>
                    </div>
                  </div>
                  <br></br>
                  <div className={destinationElevatorTimeHidden}>
                    <h2>Is there a time restriction with the elevator?</h2>
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
                  <div className={boxesHidden}>
                    <h2>About how many boxes will we be moving?</h2>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          value={"0-10"}
                          name="boxes"
                          default-checked={this.state.boxes}
                          onChange={this.handleDetailChange}
                        />0-10 - Ex. Furniture Only
                  </label>
                      <br></br>
                      <label>
                        <input
                          type="radio"
                          value={"10-20"}
                          name="boxes"
                          default-checked={this.state.boxes}
                          onChange={this.handleDetailChange}
                        />10-20 - Ex. Light studio/1 Bedroom Apartment
                  </label>
                      <br></br>
                      <label>
                        <input
                          type="radio"
                          value={"20-30"}
                          name="boxes"
                          default-checked={this.state.boxes}
                          onChange={this.handleDetailChange}
                        />20-30 - Ex. 1-2 Bedroom Apartment
                  </label>
                      <br></br>
                      <label>
                        <input
                          type="radio"
                          value={"30-40"}
                          name="boxes"
                          default-checked={this.state.boxes}
                          onChange={this.handleDetailChange}
                        />30-40 - Ex. 2 Bedroom Apartment, 1-2 Story House
                  </label>
                      <br></br>
                      <label>
                        <input
                          type="radio"
                          value={"40-50"}
                          name="boxes"
                          default-checked={this.state.boxes}
                          onChange={this.handleDetailChange}
                        />40-50 - Ex. 2-3 Bedroom Apartment/House
                  </label>
                      <br></br>
                      <label>
                        <input
                          type="radio"
                          value={"50-75"}
                          name="boxes"
                          default-checked={this.state.boxes}
                          onChange={this.handleDetailChange}
                        />50-75 - Ex. 3 Bedroom Row Home
                  </label>
                      <br></br>
                      <label>
                        <input
                          type="radio"
                          value={"75-100"}
                          name="boxes"
                          default-checked={this.state.boxes}
                          onChange={this.handleDetailChange}
                        />75-100 - Ex. 4 Bedroom Row Home/Suburban House
                  </label>
                    </div>
                  </div>
                  <br></br>
                  <div className={movingDetailsHidden}>
                    <h2>Are there any items that need special care?</h2>
                    <TextArea
                      id="special"
                      name="special"
                      onChange={this.handleInputChange.bind(this)}
                      placeholder="Special care items"
                      value={this.state.special}
                      style={{ width: "35vw" }}
                      rows={3}
                    />
                  </div>
                  <br></br>
                  <div className={movingDetailsHidden}>
                    <h2>Is there anything else we should know about the move?</h2>
                    <TextArea
                      id="details"
                      name="details"
                      onChange={this.handleInputChange.bind(this)}
                      placeholder="Details"
                      value={this.state.details}
                      style={{ width: "35vw" }}
                      rows={3}
                    />
                  </div>
                </div>
                <div className={packHidden}>
                  <div className={packAddressHidden}>
                    <h2>At what address will we be PACKING?</h2>
                    <TextArea
                      id="current"
                      name="current"
                      onChange={this.handleInputChange.bind(this)}
                      placeholder="Enter your address"
                      required
                      value={this.state.current}
                      style={{ width: "100%" }}
                      rows={3}
                    />
                  </div>
                  <br></br>
                  <div className={packBedroomsHidden}>
                    <h2>How many bedrooms will we be PACKING</h2>
                    <TextArea
                      id="packBedrooms"
                      name="packBedrooms"
                      onChange={this.handleInputChange.bind(this)}
                      placeholder="##"
                      value={this.state.packBedrooms}
                      style={{ width: "100%" }}
                      rows={1}
                    />
                  </div>
                  <div className={packSpecialHidden}>
                    <h2>Are there any items that need special care?</h2>
                    <TextArea
                      id="special"
                      name="special"
                      onChange={this.handleInputChange.bind(this)}
                      placeholder="Special care items"
                      value={this.state.special}
                      style={{ width: "35vw" }}
                      rows={3}
                    />
                  </div>
                  <br></br>
                  <div className={packMoveHidden}>
                    <h2>Is there anything else we should know?</h2>
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
              </div>
              <div className={crateHidden}>
                <div className={crateAddressHidden}>
                  <h2>At what address will we be CRATING?</h2>
                  <TextArea
                    id="current"
                    name="current"
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="Enter your address"
                    required
                    value={this.state.current}
                    style={{ width: "35vw" }}
                    rows={3}
                  />
                </div>
                <br></br>
                <div className="infoq crate-detailsq">
                  <h2>Which items will we be CRATING?</h2>
                  <TextArea
                    id="crateDetails"
                    name="crateDetails"
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="Details"
                    value={this.state.crateDetails}
                    style={{ width: "35vw" }}
                    rows={3}
                  />
                </div>
              </div>
              <div className={unpackHidden}>
                <div className={unpackAddressHidden}>
                  <h2>At what address will we be UNPACKING?</h2>
                  <TextArea
                    id="destination"
                    name="destination"
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="Enter your new address"
                    required
                    value={this.state.destination}
                    style={{ width: "100%" }}
                    rows={3}
                  />
                </div>
                <br></br>
                <div className={unpackBedroomsHidden}>
                  <h2>How many bedrooms will we be UNPACKING</h2>
                  <TextArea
                    id="unpackBedrooms"
                    name="unpackBedrooms"
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="##"
                    value={this.state.unpackBedrooms}
                    style={{ width: "100%" }}
                    rows={1}
                  />
                </div>
                <div className={unpackSpecialHidden}>
                  <h2>Are there any items that need special care?</h2>
                  <TextArea
                    id="special"
                    name="special"
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="Special care items"
                    value={this.state.special}
                    style={{ width: "35vw" }}
                    rows={3}
                  />
                </div>
                <br></br>
                <div className={unpackSpecialHidden}>
                  <h2>Is there anything else we should know?</h2>
                  <TextArea
                    id="details"
                    name="details"
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="Details"
                    value={this.state.details}
                    style={{ width: "35vw" }}
                    rows={3}
                  />
                </div>
                <div className={unpackBoxesHidden}>
                  <h2>About how many boxes will we be UNPACKING?</h2>
                  <TextArea
                    id="unpackBoxes"
                    name="unpackBoxes"
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="##"
                    value={this.state.unpackBoxes}
                    style={{ width: "100%" }}
                    rows={1}
                  />
                </div>
              </div>
              <div className={mountHidden}>
                <div className={mountAddressHidden}>
                  <h2>At what address will we be MOUNTING?</h2>
                  <TextArea
                    id="destination"
                    name="destination"
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="Enter your new address"
                    required
                    value={this.state.destination}
                    style={{ width: "35vw" }}
                    rows={3}
                  />
                </div>
                <br></br>
                <div className={mountDetailsHidden}>
                  <h2>Which items will we be MOUNTING?</h2>
                  <TextArea
                    id="mountDetails"
                    name="mountDetails"
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="Details"
                    value={this.state.mountDetails}
                    style={{ width: "35vw" }}
                    rows={3}
                  />
                </div>
              </div>
              <div className="mmc-detailsq">
                <div className={mmcDetailsHidden}>
                  <h2>Is there anything else we should know about the move?</h2>
                  <TextArea
                    id="details"
                    name="details"
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="Details"
                    value={this.state.details}
                    style={{ width: "35vw" }}
                    rows={3}
                  />
                </div>
              </div>
              <div className="mum-detailsq">
                <div className={mumDetailsHidden}>
                  <h2>Is there anything else we should know about the move?</h2>
                  <TextArea
                    id="details"
                    name="details"
                    onChange={this.handleInputChange.bind(this)}
                    placeholder="Details"
                    value={this.state.details}
                    style={{ width: "35vw" }}
                    rows={3}
                  />
                </div>
              </div>
            </div>
            <div className="btn-row row">
              <div className="button-div">
                <a className="submit-button" href="#" onClick={this.handleFormSubmit}>
                  <h4 className="button-text">Get Your Estimate</h4>
                </a>
              </div>
            </div>
          </form>
        </div >
      </Container >
    );
  }
}

export default withRouter(Estimate);