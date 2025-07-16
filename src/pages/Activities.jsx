import React, { useState } from 'react';
import './Activities.css';

function Activities() {
  const activities = [
    {
      title: 'Agriculture Moderne',
      description:
        "Production de légumes frais (tomates, piments, légumes feuilles...) dans le respect des normes durables et biologiques.",
      image:
        'https://images.unsplash.com/photo-1615392368184-1e651fadbd4b?auto=format&fit=crop&w=600&q=80',
      details:
        "Notre ferme utilise des techniques modernes d'agriculture durable, combinant respect de l'environnement et efficacité. Nous cultivons principalement des tomates, piments, et légumes feuilles, avec un soin particulier à la qualité et à la traçabilité."
    },
    {
      title: 'Élevage',
      description:
        "Élevage de poulets de chair, pondeuses, cailles... avec des techniques innovantes pour garantir une production saine et efficace.",
      image:
        'https://images.unsplash.com/photo-1589712234518-97f6737a75b4?auto=format&fit=crop&w=600&q=80',
      details:
        "Nous pratiquons un élevage respectueux du bien-être animal, avec une attention particulière à la santé et à la nutrition des poulets et cailles, afin de garantir une viande de qualité et saine."
    },
    {
      title: 'Formations & Accompagnement',
      description:
        "Sessions pratiques et théoriques pour former les jeunes entrepreneurs dans l’agriculture et l’élevage.",
      image:
        'https://images.unsplash.com/photo-1573497019449-89db844f78a8?auto=format&fit=crop&w=600&q=80',
      details:
        "FL-AGROLEADER organise régulièrement des formations et ateliers pour transmettre son savoir-faire aux jeunes entrepreneurs agricoles, couvrant les bonnes pratiques, la gestion et les innovations."
    },
    {
      title: 'Énergies Renouvelables',
      description:
        "Valorisation des énergies propres (solaire, biogaz) pour une agriculture durable et respectueuse de l'environnement.",
      image:
        'https://images.unsplash.com/photo-1585120622025-5c5c5c5c5c5c?auto=format&fit=crop&w=600&q=80',
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
        Découvrez les principaux secteurs d'activité de FL-AGROLEADER.
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
