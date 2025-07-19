import React, { useState } from 'react';
import './Gallery.css';
import BrandName from '../components/BrandName';  

const images = [
  {
    src: '/src/assets/legume.jpeg',
    alt: 'Production de légumes',
    caption: 'Légumes Gboman',
  },
  {
    src: '/src/assets/piment.jpeg',
    caption: 'Piment',
  },
  // {
  //   src: '/src/assets/papagne.jpeg',
  //   alt: 'Formation agricole',
  //   caption: 'Sessions de formation',
  // },
  {
    src: '/src/assets/tomate.jpeg',
    alt: 'Récolte des tomates',
    caption: 'Récolte des tomates fraîches',
  },
  {
    src: '/src/assets/chayo.jpeg',
    alt: 'Énergie renouvelable',
    caption: 'Chayo',
  },
  {
    src: '/src/assets/amarente.jpeg',
    alt: 'Énergie renouvelable',
    caption: 'Amarente',
  },
  {
    src: '/src/assets/carrotte.jpeg',
    alt: 'Énergie renouvelable',
    caption: 'Carrotte',
  },
  {
    src: '/src/assets/feuille.jpeg',
    alt: 'Énergie renouvelable',
    caption: 'Feuille d,Epignard',
  },
  {
    src: '/src/assets/gombo.jpeg',
    alt: 'Énergie renouvelable',
    caption: 'Gombo',
  },

   {
    src: '/src/assets/Laitue.jpeg',
    alt: 'Énergie renouvelable',
    caption: 'Laitue',
  },

   {
    src: '/src/assets/concombre.jpeg',
    alt: 'Énergie renouvelable',
    caption: 'Concombre',
  },

   {
    src: '/src/assets/papagne.jpeg',
    alt: 'Énergie renouvelable',
    caption: 'Papagne Maradona',
  },
   {
    src: '/src/assets/citronnelle.jpeg',
    alt: 'Énergie renouvelable',
    caption: 'Citronnelle',
  },

  {
    src: '/src/assets/equi.jpg',
    alt: 'Énergie renouvelable',
    caption: 'Our band',
  },

  {
    src: '/src/assets/et.jpg',
    alt: 'Énergie renouvelable',
    caption: 'Culture',
  },
];

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="gallery-section">
      <h2>Galerie de la ferme <BrandName /></h2>

      <div className="gallery-grid">
        {images.map(({ src, alt, caption }, idx) => (
          <div
            key={idx}
            className="gallery-item"
            onClick={() => setSelectedImg(src)}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => { if (e.key === 'Enter') setSelectedImg(src); }}
          >
            <img src={src} alt={alt} loading="lazy" />
            <p className="caption">{caption}</p>
          </div>
        ))}
      </div>

      {selectedImg && (
        <div className="lightbox" onClick={() => setSelectedImg(null)} role="button" tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === 'Escape') setSelectedImg(null); }}>
          <img src={selectedImg} alt="Agrandie" />
          <span className="close-btn" aria-label="Fermer la fenêtre">×</span>
        </div>
      )}
    </section>
  );
}

export default Gallery;
