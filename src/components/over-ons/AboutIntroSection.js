import React from "react";
import "./AboutIntroSection.css";
import herobgImage from "../../assets/images/hero-bg.webp";
import { Link } from "react-router-dom";
import InfoCard from '../reusable/InfoCard'; // 🔁 herbruikbare card

const AboutIntroSection = () => {
  return (
    <section className="about-intro-section">
      <div className="about-intro-container">
        <div className="intro-text">
        <h2 className="section-title">
            Bij Kraamzorg Bee draait alles<br />
            om persoonlijke aandacht,<br />
            vertrouwen en warmte.
        </h2>
          <p>
            Wij zijn een betrokken en kleinschalige kraamzorgorganisatie, opgericht vanuit de wens
            om gezinnen te ondersteunen tijdens de meest bijzondere periode van hun leven.
          </p>
          <p>
          Onze kracht zit in onze persoonlijke aanpak. 
          We nemen de tijd om naar jouw wensen te luisteren en stemmen onze zorg volledig af op jouw situatie.
           Geen gezin is hetzelfde, en daarom vinden wij het belangrijk om zorg te bieden die past bij jullie behoeften, ritme en voorkeuren.
          </p>
          <Link to="/inschrijven" className="intro-cta-button">
            Inschrijven
          </Link>
        </div>

        <div className="intro-image">
          <img src={herobgImage} alt="Kraamzorg Bee baby" />
        </div>
      </div>

      <div className="about-cards-container">
  <div className="about-cards">
    <InfoCard
      title="Ervaren kraamverzorgenden uit jouw buurt"
      description="Ons team bestaat uit ervaren en betrokken kraamverzorgenden die werken in de regio Zuid-Holland. Zij kennen de omgeving, spreken de taal en weten precies wat jij nodig hebt in deze kwetsbare en mooie fase."
    />
    <InfoCard
      title="Wij staan voor je klaar"
      description="Of je nu kiest voor borstvoeding of flesvoeding, een thuisbevalling of ziekenhuisbevalling, bij Kraamzorg Bee staan we naast je. We bieden rust, structuur, een luisterend oor en praktische ondersteuning."
    />
  </div>
</div>

    </section>
  );
};

export default AboutIntroSection;
