import React, { Component } from "react";
import '../App.css';
import { Col, Container } from "../components/grid";
import CityImage from "./cityImage.js";
import SmallLogoImage from "./smallLogoImage.js";
import { withRouter } from 'react-router';
import BigMovingIcon from "./bigIcons/movingIcon";
import BigPackingIcon from "./bigIcons/packingIcon";
import BigUnpackingIcon from "./bigIcons/unpackingIcon";
import BigCratingIcon from "./bigIcons/cratingIcon";
import BigMountingIcon from "./bigIcons/mountingIcon";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Container fluid className='home-container'>
          <div className="scroll-rows row">
            <SmallLogoImage />
            {/* <ArchImage /> */}
            <div className="button-row row">
              <h1 className="title-text">Meetinghouse Movers</h1>
              <div className="eButton-div">
                <a className="eButton" href="/estimate">
                  <h4 className="button-text">Get an Estimate</h4>
                </a>
              </div>

              <h3 className="tagline-text">Moving Philly Every Day</h3>
            </div>
            <div className="services-row">
              <h2 className="services-text">↓ Services We Provide ↓</h2>
              <h4>Click any service to start your estimate</h4>
            </div>
            <SmallLogoImage />
            <div className="bigscroll-row row">
              <div className="services-col bigcard-col">
                <div className="bigcard bigcard1" id="bigcard1">
                  <BigMovingIcon />
                  <div id="text-area1" className="text-area">
                    <h3>MOVING</h3>
                    <p>You book the date and time of day based off of our availability and your preference. Our team of professional, experienced and courteous movers shows up on schedule ready to work. We will always have the appropriate sized truck and number of movers based off of your description of your move and the crew will come prepared with plenty of moving blankets, straps, dollies to get your things loaded onto and off of the truck in a safe, quick and efficient manner. All furniture gets wrapped or protected while on the truck and our expert movers will do everything in their power to protect your furniture and valuables. When we arrive, we expect the residence we are moving to be fully packed and prepared to be moved (drawers of all furniture empty, all small and loose items safely boxed or bagged). This is an HOURLY RATE based off of the amount of movers needed to efficiently do the job. If you don;t think you have the time or energy to take care of preparing everything to be moved, please hire us to pack you as well!</p>
                    <a className="services-button" href="/estimate">
                      <h4 className="services-button-text">Get a Moving Estimate</h4>
                    </a>
                  </div>
                </div>
                <div className="bigcard bigcard2" id="bigcard2">
                  <BigPackingIcon />
                  <div id="text-area2" className="text-area">
                    <h3>PACKING</h3>
                    <p>You book us a day or two before your scheduled move to come and completely prepare your residence for the move. We will bring all the supplies (boxes, packing paper, bubble wrap, tape etc.) you need (unless you tell us in advance that you are getting your own) to safely wrap up and box all of your small loose items. Everything from clothing and bedding to books to kitchen items/dining sets. You can tailor this service to what you want our team to focus on or if money is no object but your time is, you can just hire us to spend a whole day or half day packing your house or apartment. On the packing estimate form you can select a desired time frame that you want or we will recommend one based off of your inventory etc. This is an HOURLY RATE based off of the amount of packers needed to efficiently do the job.</p>
                    <a className="services-button" href="/estimate">
                      <h4 className="services-button-text">Get a Packing Estimate</h4>
                    </a>
                  </div>
                </div>
                <div className="bigcard bigcard3" id="bigcard3">
                  <BigUnpackingIcon />
                  <div className="text-area">
                    <h3>UNPACKING</h3>
                    <p>You book us for a day or two after your scheduled move to come help you unpack all of the boxes and organize your life into your new home. Like with Packing services, you can select a desired time frame on the Unpacking estimate form that you want or we will recommend one based off of your inventory etc. Usually people just hire us to help unpack their kitchen or living room items. This is an HOURLY RATE based off of the amount of packers needed to efficiently do the job.</p>
                    <a className="services-button" href="/estimate">
                      <h4 className="services-button-text">Get an Unpacking Estimate</h4>
                    </a>
                  </div>
                </div>
                <div className="bigcard bigcard4" id="bigcard4">
                  <BigMountingIcon />
                  <div className="text-area">
                    <h3>MOUNTING</h3>
                    <p>You have a TV or a piece of artwork that you need help hanging or mounting on a wall? We can come a day or two after your move (this service can't be combined with the moving service for liability purposes) with the proper tools and hardware to make this happen! We have carpentry/art handling experience on hand. This service can be combined with unpacking or be handled as a separate thing all together. This is  FLAT RATE charge based on each particular piece that needs mounting.</p>
                    <a className="services-button" href="/estimate">
                      <h4 className="services-button-text">Get a Mounting Estimate</h4>
                    </a>
                  </div>
                </div>
                <div className="bigcard bigcard5" id="bigcard5">
                  <BigCratingIcon />
                  <div className="text-area">
                    <h3>CRATING</h3>
                    <p>You have an antique mirror, chandelier or a piece of artwork that is irreplaceable and you need to insure that it survives your move? We can come a week or two before your move to take measurements and custom build a crate just for your item! We have carpentry/art handling experience on hand. This is  FLAT RATE charge based on each particular piece that needs crating according to supplies and labor costs for construction. The crate can be brought on the packing day or moving day to be loaded.</p>
                    <a className="services-button" href="/estimate">
                      <h4 className="services-button-text">Get a Crating Estimate</h4>
                    </a>
                  </div>
                </div>
              </div>

            </div>
            {/* <div className="descriptions-row row">
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
            </div> */}
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