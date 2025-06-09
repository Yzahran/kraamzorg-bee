// ParallaxQuoteSection.js
import React from 'react';
import pregnantImage from '../../assets/images/pregnant.webp';
import './ParallaxQuoteSection.css';

const ParallaxQuoteSection = () => {
    return (
        <section className="quote-section">
            <div className="quote-container">
                <div className="quote-image-wrapper">
                    <img 
                        src={pregnantImage} 
                        alt="Zwangere vrouw in rustige omgeving" 
                        className="quote-image"
                    />
                    <div className="quote-overlay"></div>
                </div>
                
                <div className="quote-content">

                    <blockquote className="quote-text">
                        "De eerste dagen met je baby zijn onvergetelijk. Wij zorgen dat jij kunt genieten, terwijl wij zorgen voor de rest."
                    </blockquote>
                    
                    <div className="quote-author">
                        <div className="author-info">
                            <span className="author-name">Kraamzorg Bee</span>
                            <span className="author-title">Jouw vertrouwde kraamzorg</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ParallaxQuoteSection;