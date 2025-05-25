import React, { useState, useEffect } from 'react';
import { PrimaryButton, DefaultButton } from '@fluentui/react';

import './App.css';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { title: "Power Apps", description: "Build apps without code", icon: "🚀", color: "#742774" },
    { title: "Power Automate", description: "Automate workflows", icon: "⚡", color: "#0078d4" },
    { title: "Power BI", description: "Transform data to insights", icon: "📊", color: "#f2c811" },
    { title: "Power Pages", description: "Create websites quickly", icon: "🌐", color: "#00bcf2" }
  ];

  return (
    <div className="app-container">
      {/* Hero Section */}
      <section className={`hero-section ${isLoaded ? 'loaded' : ''}`}>
        <div className="hero-content">
          <div className="hero-badge">
            <span>✨ Microsoft Power Platform</span>
          </div>
          <h1 className="hero-title">
            Empower everyone to build
            <span className="gradient-text"> amazing solutions</span>
          </h1>
          <p className="hero-subtitle">
            Transform your business with low-code solutions that connect your entire organization
          </p>
          <div className="hero-buttons">
            <PrimaryButton className="cta-button primary" text="Get Started Free" />
            <DefaultButton className="cta-button secondary" text="Watch Demo" />
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="floating-elements">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`floating-element element-${i + 1}`}>
                <div className="element-inner"></div>
              </div>
            ))}
          </div>
          <div className="central-logo">
            <div className="logo-ring"></div>
            <div className="logo-core">⚡</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="section-header">
            <h2>Build the future with Power Platform</h2>
            <p>Four powerful tools, infinite possibilities</p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`feature-card ${activeFeature === index ? 'active' : ''}`}
                style={{ '--accent-color': feature.color } as React.CSSProperties}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="feature-icon">
                  <span>{feature.icon}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="feature-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">275M+</div>
            <div className="stat-label">Monthly active users</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">97%</div>
            <div className="stat-label">Customer satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Organizations trust us</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta">
        <div className="cta-content">
          <h2>Ready to transform your business?</h2>
          <p>Join millions of users building the future with Power Platform</p>
          <PrimaryButton className="cta-button large" text="Start Building Today" />
        </div>
      </section>
    </div>
  );
};

export default App;
