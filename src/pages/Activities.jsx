import React, { useState } from 'react';
import './Activities.css';
import BrandName from '../components/BrandName';

function Activities() {
  const activities = [
    {
      title: 'Agriculture Moderne',
      description:
        "Production de légumes frais (tomates, piments, légumes feuilles...) dans le respect des normes durables et biologiques.",
      image:
        '/src/assets/agro.jpg',
      details:
        "Notre ferme utilise des techniques modernes d'agriculture durable, combinant respect de l'environnement et efficacité. Nous cultivons principalement des tomates, piments, et légumes feuilles, avec un soin particulier à la qualité et à la traçabilité."
    },
    {
      title: 'Élevage',
      description:
        "Élevage de poulets de chair, pondeuses, cailles... avec des techniques innovantes pour garantir une production saine et efficace.",
      image:
        '/src/assets/esca.jpg',
      details:
        "Nous pratiquons un élevage respectueux du bien-être animal, avec une attention particulière à la santé et à la nutrition des poulets et cailles, afin de garantir une viande de qualité et saine."
    },
    {
      title: 'Formations & Accompagnement',
      description:
        "Sessions pratiques et théoriques pour former les jeunes entrepreneurs dans l’agriculture et l’élevage.",
      image:
        '/src/assets/formation.jpg',
      details:
        "FL-AGROLEADER organise régulièrement des formations et ateliers pour transmettre son savoir-faire aux jeunes entrepreneurs agricoles, couvrant les bonnes pratiques, la gestion et les innovations."
    },
    {
      title: 'Énergies Renouvelables',
      description:
        "Valorisation des énergies propres (solaire, biogaz) pour une agriculture durable et respectueuse de l'environnement.",
      image:
        '/src/assets/renouvelable.jpg',
      details:
        "Nous intégrons des solutions d’énergie renouvelable comme les panneaux solaires et la production de biogaz pour rendre nos activités plus écologiques et autonomes."
    }
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [activeActivity, setActiveActivity] = useState(null);

  const openModal = (activity) => {
    setActiveActivity(activity);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveActivity(null);
  };

  return (
    <section className="activities-section">
      <h2>Nos Activités</h2>
      <p className="activities-subtitle">
        Découvrez les principaux secteurs d'activité de <span style={{ color: '#32A000' }}>FL</span>
      <span style={{ color: '#32A000', margin: '0 5px' }}>AGRO</span>
      <span style={{ color: '#32A000' }}>LEADER</span> .
      </p>

      <div className="activities-grid">
        {activities.map((activity, index) => (
          <div key={index} className="activity-card">
            <img src={activity.image} alt={activity.title} className="activity-image" />
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
            <button className="btn-see-more" onClick={() => openModal(activity)}>
              Voir plus
            </button>
          </div>
        ))}
      </div>

      {modalOpen && activeActivity && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <h3>{activeActivity.title}</h3>
            <img
              src={activeActivity.image}
              alt={activeActivity.title}
              className="modal-image"
            />
            <p>{activeActivity.details}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Activities;
