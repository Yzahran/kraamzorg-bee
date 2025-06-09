import React from 'react';
import './IntroSection.css';
import pregnantImage from '../../assets/images/pregnant.webp';
import InfoCard from '../reusable/InfoCard'; // 🔁 herbruikbare card

const IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="intro-content">
        <div className="intro-image">
          <img src={pregnantImage} alt="Zwangere vrouw" />
        </div>
        <div className="intro-text">
          <h2>Jouw Kraamtijd, Onze Zorg</h2>
          <p>
            De kraamtijd is een bijzondere periode, maar kan ook intens en onzeker voelen. Daarom staat Kraamzorg Bee voor je klaar met persoonlijke en warme kraamzorg. Wij begrijpen wat jij en je gezin nodig hebben en bieden zorg die past bij jullie wensen. Zo geniet je van een ontspannen kraamtijd, met rust, vertrouwen en aandacht voor elkaar.
          </p>
          <div className="intro-cards">
            <InfoCard 
              title="Persoonlijke aandacht" 
              description="Onze ervaren kraamverzorgenden nemen de tijd voor jou, je baby en je gezin." 
            />
            <InfoCard 
              title="Professioneel & vertrouwd" 
              description="Met ons HKZ-keurmerk en borstvoedings certificering ben je verzekerd van deskundige zorg." 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
