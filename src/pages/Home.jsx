import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="hero-section">
      <div className="overlay">
        <div className="hero-content">
          <h1>Bienvenue à <em>FL-AGROLEADER</em></h1>
          <p>Ensemble plus sur, Ensemble plus loin</p>
          <a href="/activities" className="btn-cta">Découvrir nos activités</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
