import React from 'react';
import Commom from './Commom';
import web from '../src/image/img3.png';
import { NavLink } from 'react-router-dom';

const About =() => {
  return(
    <>
      <Commom name='Wellcome to About Us' imgsrc={web} visit='/contact' titleln='This Line is to Check' btname='Contact Now'/>
    </>
  );
}

export default About;
