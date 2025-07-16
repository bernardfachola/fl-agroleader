import React, { useState } from 'react';
import './Gallery.css';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    alt: 'Production de légumes',
    caption: 'Production de légumes bio',
  },
  {
    src: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&w=600&q=80',
    alt: 'Élevage de poulets',
    caption: 'Élevage respectueux de poulets',
  },
  {
    src: 'https://images.unsplash.com/photo-1486308510493-cb32ecb78a1c?auto=format&fit=crop&w=600&q=80',
    alt: 'Formation agricole',
    caption: 'Sessions de formation',
  },
  {
    src: 'https://images.unsplash.com/photo-1524594157360-d3bcf23f4e59?auto=format&fit=crop&w=600&q=80',
    alt: 'Récolte des tomates',
    caption: 'Récolte des tomates fraîches',
  },
  {
    src: 'https://images.unsplash.com/photo-1498816340080-512e0d6b42ca?auto=format&fit=crop&w=600&q=80',
    alt: 'Énergie renouvelable',
    caption: 'Installation d’énergie solaire',
  },
];

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="gallery-section">
      <h2>Galerie de la ferme FL-AGROLEADER</h2>

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
