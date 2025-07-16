import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="media-wrapper">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
            alt="Ferme FL-AGROLEADER"
            className="about-image"
          />
          <video 
            className="about-video"
            controls
            preload="metadata"
            poster="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
          >
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/webm" />
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        </div>

        <div className="about-text">
          <h2>Notre histoire</h2>
          <p>
            Depuis sa création, <span className="highlight">FL-AGROLEADER</span> s'engage dans le développement d'une agriculture moderne et durable.
            Notre ferme intègre les technologies actuelles tout en respectant la nature et les communautés locales.
          </p>

          <h2>Nos valeurs</h2>
          <p>
            <span className="highlight">Innovation</span>, qualité, durabilité et respect humain sont au cœur de nos actions quotidiennes.
          </p>

          <h2>Notre vision</h2>
          <p>
            Être un leader dans l’agrobusiness africain en combinant tradition et modernité pour nourrir le futur.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
