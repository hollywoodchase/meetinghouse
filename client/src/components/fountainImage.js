import React from 'react';
import img from '../images/philly-fountain.jpg'; 
import { Container } from "../components/grid";


function FountainImage() {
  return <img src={img} class="fountain-image" alt="Fountain" />;
}

export default FountainImage;

