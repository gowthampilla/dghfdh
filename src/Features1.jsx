import React from 'react';
import './Features1.css'; // Import the CSS file

// Replace these paths with the actual local paths to your images
import aiImage from './components/imgs/Encryption (5).png';
import teamBuilderImage from './components/imgs/Encryption (2).png';
import marketMatchImage from './components/imgs/Encryption (3).png';
import growthBlueprintImage from './components/imgs/Encryption (4).png';

const features = [
  {
    id: 1,
    title: 'Eterna X',
    description: 'Eterna is a legacy replica creator that captures a persons voice, values, and emotional depth—preserving their story, memories, and cultural identity for future generations using advanced AI and human-centered design.',
    image: aiImage
  },
  {
    id: 2,
    title: 'AES-256 ',
    description: 'We use AES-256 (Advanced Encryption Standard with 256-bit key)one of the most secure encryption algorithms available today trusted by governments, financial institutions, and top security agencies worldwide',
    image: teamBuilderImage
  },
  {
    id: 3,
    title: 'Replica E3',
    description: 'Replica E3 enables dynamic conversations. It captures their voice, emotions, and personality traits, allowing users to interact with a replica that responds just like the person themselves, creating an immersive and personalized experience.',
    image: marketMatchImage
  },
  {
    id: 3,
    title: 'OMNIX-T3',
    description: '  It suggests that the AI adapts and evolves based on the user’s needs, making it ideal for students, doctors, or any other professional.',
    image: growthBlueprintImage
  
  
  }
];

const FeatureCards = () => {
  return (
    <section className="feature-section">
      <h2 className="feature-heading">Explore Our Features</h2>
      <div className="feature-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-image-container">
              <img src={feature.image} alt={feature.title} className="feature-image" />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
