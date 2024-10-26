"use client"
import React from 'react';
import About from './about/page';
import Service from './services/page';
import Contact from './contact/page';
import Review from './reviews/page';
import Facilities from './facilities/page';
import Trainers from './components/trainers';
import Howitworks from './components/howitworks';

function Home() {
  return (
    <div>
      <About />
      <Service />
      <Review />
      <Facilities />
      <Trainers />
      <Howitworks />
      <Contact />
    </div>
  );
}

export default Home;
