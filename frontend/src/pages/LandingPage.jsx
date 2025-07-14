import React from 'react';
import HeroSection from '../components/HeroSection';
import DiscreteSliderValues from '../components/DiscreteSliderValues';

// import CardStepperSlider from '../components/CardStepperSlider';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <HeroSection />
      <DiscreteSliderValues />
    </div>
  );
};

export default LandingPage;
