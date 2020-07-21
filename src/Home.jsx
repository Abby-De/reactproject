import React from 'react';
import web from '../src/image/img3.png';
import { NavLink } from 'react-router-dom';
import Commom from './Commom';

const Home =() => {
  return(
    <>
      <Commom name='Grow Your Bussines With' imgsrc={web} visit='/service' titleln='This Line is to Check My Knowlage' btname='Get Statred'/>
    </>
  );
}

export default Home;
