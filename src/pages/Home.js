// src/pages/Home.js
import React from 'react';
import { 
  HeroSection, 
  IntroSection, 
  ServicesSection, 
  QuoteSection, 
  ParallaxQuoteSection,
  TestimonialsSection, 
  WorkAreaSection, 
  FinalCTA, 
  Footer 
} from '../components/home';

const Home = () => {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <ParallaxQuoteSection />
      <TestimonialsSection />
      <WorkAreaSection />
      <FinalCTA />
      {/* <QuoteSection />
      <TestimonialsSection />
      <WorkAreaSection />
      <FinalCTA />
      <Footer /> */}
    </>
  );
};

export default Home;
