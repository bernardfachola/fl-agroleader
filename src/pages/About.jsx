import React from 'react';
import './About.css';
import BrandName from '../components/BrandName';

function About() {
  return (
    <section className="about-section">
      <h2 className="about-title">À propos de <BrandName /></h2>

      <div className="about-content">
        <div className="media-column">
          <img
            src="/src/assets/agro.jpg"
            alt="Ferme FL-AGROLEADER"
            className="about-image"
          />
          <video 
            className="about-video"
            controls
            preload="metadata"
            poster="/src/assets/vision.jpg"
          >
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/webm" />
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        </div>

        <div className="text-column">
          <h3>Notre histoire</h3>
          <p>
            Depuis sa création, <BrandName /> travaille à construire une agriculture responsable et innovante, respectueuse des traditions locales et du développement durable.
          </p>

          <h3>Nos valeurs</h3>
          <p>
            Qualité, durabilité, respect des hommes et de la nature.
          </p>

          <h3>Notre vision</h3>
          <p>
            Être leader dans l'agrobusiness africain, en alliant technologie et nature.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
