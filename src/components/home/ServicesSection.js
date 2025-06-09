import React from 'react';
import './ServicesSection.css';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      title: "Kraamzorg op maat",
      description: "Zorg afgestemd op jouw situatie, van praktische ondersteuning tot emotionele begeleiding.",
      icon: "🤱"
    },
    {
      title: "Borstvoedings- en voedingsadvies",
      description: "Deskundige hulp bij borstvoeding of flesvoeding, afgestemd op jouw keuze.",
      icon: "🍼"
    },
    {
      title: "Ondersteuning voor het hele gezin",
      description: "Niet alleen voor jou, maar ook aandacht voor eventuele broertjes of zusjes.",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "24/7 bereikbaar bij bevalling",
      description: "Wij staan dag en nacht klaar om je te ondersteunen bij een thuis bevalling.",
      icon: "🌙"
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        {/* Header Section */}
        <div className="services-header">
          <div className="services-badge">
            <span>✨ Onze Diensten</span>
          </div>
          <h2>Diensten van Kraamzorg Bee</h2>
          <p className="services-intro">
            Ben je op zoek naar persoonlijke, liefdevolle kraamzorg die past bij jouw gezin? 
            Bij Kraamzorg Bee bieden we kraamzorg op maat, afgestemd op jouw wensen en behoeften. 
            Met jarenlange ervaring en oog voor detail zorgen wij voor een warme, ontspannen 
            kraamtijd waarin jij en je baby centraal staan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card service-card-${index + 1}`}>
              <div className="service-icon">
                {service.icon}
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="service-hover-effect"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="services-cta">
          <div className="cta-content">
            <h3>Klaar voor persoonlijke kraamzorg?</h3>
            <p>Laten we samen jouw kraamtijd onvergetelijk maken</p>
          </div>
          <Link to="/contact" className="cta-button">
            <span>Contact opnemen →</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;