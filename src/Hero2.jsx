import React from 'react';
import './Hero2.css';

const Features = () => {
  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <h2 className="features-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🚀 Fast Launch</h3>
            <p>Launch your ideas quickly with our streamlined support system.</p>
          </div>
          <div className="feature-card">
            <h3>📊 Smart Analytics</h3>
            <p>Use AI-powered tools to analyze your market fit and customer trends.</p>
          </div>
          <div className="feature-card">
            <h3>🧠 Expert Network</h3>
            <p>Access experienced professionals to help build your dream team.</p>
          </div>
          <div className="feature-card">
            <h3>💡 Innovative Tools</h3>
            <p>Leverage advanced tools to test and refine your product ideas.</p>
          </div>
          <div className="feature-card">
            <h3>🔒 Secure Platform</h3>
            <p>Your data is protected with top-notch security measures to ensure privacy.</p>
          </div>
          <div className="feature-card">
            <h3>🌐 Global Reach</h3>
            <p>Expand your product’s reach to global markets with our international network.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;