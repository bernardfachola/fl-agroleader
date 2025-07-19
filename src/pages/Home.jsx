import React from 'react';
import './Home.css';
import BrandName from '../components/BrandName';
import { MdHeight } from 'react-icons/md';

function Home() {
  return (
    <section className="hero-section">
      <div className="overlay">
        <div className="hero-content">
          <h1> De la terre à l'assiette chez <span style={{ color: '#32A000' }}>F</span>
          <span style={{ color: '#000000' }}>L</span>
      <span style={{ color: '#32A000', margin: '0 5px' }}>AGRO</span>
      <span style={{ color: '#000000' }}>LEADER</span></h1>
          <p style={{ fontStyle: 'italic', color: 'white' }}>Ensemble plus sùr, Ensemble plus loin</p>
          <a href="/activities" className="btn-cta">Découvrir nos activités</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
