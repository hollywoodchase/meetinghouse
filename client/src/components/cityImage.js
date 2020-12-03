import React from 'react';
import img from '../images/philly-skyline.png'; 
import { Container } from "../components/grid";

function CityImage() {
  return <img src={img} class="city-image" alt="Img" />;
}

export default CityImage;