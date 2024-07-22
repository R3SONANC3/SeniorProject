import React from 'react';
import '../styles/About.css';
import AboutSection from '../components/AboutSection'
import TeamSection from '../components/TeamSection'
import AdvisorSection from '../components/AdvisorSection'

function AboutUs() {
  return (
    <div>
      <AboutSection />
      <TeamSection />
      <AdvisorSection />
    </div>
  );
}

export default AboutUs;