import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Stories from '../components/Stories';
import Newsitems from '../components/Newsitems';
import News from '../components/News';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <Newsitems />
      <News />
      <Stories />
      <Footer />
    </>
  );
}

export default Home;
