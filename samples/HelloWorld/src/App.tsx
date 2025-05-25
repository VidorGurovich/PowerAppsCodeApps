import React, { useState, useEffect } from 'react';
import { PrimaryButton, DefaultButton, TextField, Dropdown} from '@fluentui/react';
import PowerProvider from './PowerProvider';

import './App.css';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', department: '' });
  const [workflowSteps, setWorkflowSteps] = useState<string[]>([]);
  const [appComponents, setAppComponents] = useState<string[]>([]);

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
    <>
      <PowerProvider />
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
          </p>          <div className="hero-buttons">
            <PrimaryButton 
              className="cta-button primary" 
              text="Try Interactive Demo" 
              onClick={() => setActiveDemo('app-builder')}
            />
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

      {/* Interactive Demo Section */}
      {activeDemo && (
        <section className="demo-section">
          <div className="demo-container">
            <div className="demo-header">
              <h2>Interactive Power Platform Demo</h2>
              <div className="demo-tabs">
                <button 
                  className={`demo-tab ${activeDemo === 'app-builder' ? 'active' : ''}`}
                  onClick={() => setActiveDemo('app-builder')}
                >
                  🚀 App Builder
                </button>
                <button 
                  className={`demo-tab ${activeDemo === 'workflow' ? 'active' : ''}`}
                  onClick={() => setActiveDemo('workflow')}
                >
                  ⚡ Workflow Designer
                </button>
                <button 
                  className={`demo-tab ${activeDemo === 'analytics' ? 'active' : ''}`}
                  onClick={() => setActiveDemo('analytics')}
                >
                  📊 Analytics Dashboard
                </button>
                <button 
                  className={`demo-tab ${activeDemo === 'form' ? 'active' : ''}`}
                  onClick={() => setActiveDemo('form')}
                >
                  📝 Form Builder
                </button>
              </div>
              <button 
                className="close-demo"
                onClick={() => setActiveDemo(null)}
              >
                ✕
              </button>
            </div>

            <div className="demo-content">
              {activeDemo === 'app-builder' && (
                <div className="app-builder-demo">
                  <div className="builder-sidebar">
                    <h3>Component Toolbox</h3>
                    <div className="component-list">
                      {['📱 Button', '📝 Text Input', '📋 Dropdown', '🖼️ Gallery', '📊 Chart'].map(comp => (
                        <div 
                          key={comp}
                          className="component-item"
                          onClick={() => setAppComponents(prev => [...prev, comp])}
                        >
                          {comp}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="app-canvas">
                    <h3>App Canvas</h3>
                    <div className="canvas-area">
                      {appComponents.length === 0 ? (
                        <div className="canvas-placeholder">
                          Click components from the toolbox to add them to your app
                        </div>
                      ) : (
                        appComponents.map((comp, index) => (
                          <div key={index} className="canvas-component">
                            {comp}
                          </div>
                        ))
                      )}
                    </div>
                    <button 
                      className="clear-canvas"
                      onClick={() => setAppComponents([])}
                    >
                      Clear Canvas
                    </button>
                  </div>
                </div>
              )}

              {activeDemo === 'workflow' && (
                <div className="workflow-demo">
                  <div className="workflow-sidebar">
                    <h3>Workflow Steps</h3>
                    <div className="step-list">
                      {['📧 Send Email', '📋 Create Record', '✅ Approval', '🔔 Notification', '📊 Update Data'].map(step => (
                        <div 
                          key={step}
                          className="step-item"
                          onClick={() => setWorkflowSteps(prev => [...prev, step])}
                        >
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="workflow-canvas">
                    <h3>Workflow Designer</h3>
                    <div className="workflow-area">
                      <div className="workflow-trigger">
                        🚀 Trigger: When item is created
                      </div>
                      {workflowSteps.map((step, index) => (
                        <div key={index} className="workflow-step">
                          <div className="workflow-connector">↓</div>
                          <div className="workflow-action">{step}</div>
                        </div>
                      ))}
                      {workflowSteps.length === 0 && (
                        <div className="workflow-placeholder">
                          Add workflow steps from the sidebar
                        </div>
                      )}
                    </div>
                    <button 
                      className="clear-workflow"
                      onClick={() => setWorkflowSteps([])}
                    >
                      Clear Workflow
                    </button>
                  </div>
                </div>
              )}

              {activeDemo === 'analytics' && (
                <div className="analytics-demo">
                  <h3>Power BI Dashboard</h3>
                  <div className="analytics-grid">
                    <div className="metric-card">
                      <h4>Total Users</h4>
                      <div className="metric-value">2,847</div>
                      <div className="metric-change positive">+12% ↗</div>
                    </div>
                    <div className="metric-card">
                      <h4>Active Apps</h4>
                      <div className="metric-value">156</div>
                      <div className="metric-change positive">+8% ↗</div>
                    </div>
                    <div className="metric-card">
                      <h4>Workflows</h4>
                      <div className="metric-value">89</div>
                      <div className="metric-change positive">+15% ↗</div>
                    </div>
                    <div className="metric-card">
                      <h4>Data Sources</h4>
                      <div className="metric-value">23</div>
                      <div className="metric-change positive">+5% ↗</div>
                    </div>
                  </div>
                  <div className="chart-container">
                    <h4>Department Usage</h4>
                    <div className="simple-chart">
                      {[
                        { name: 'Sales', value: 85, color: '#0078d4' },
                        { name: 'Marketing', value: 65, color: '#742774' },
                        { name: 'Support', value: 90, color: '#00bcf2' },
                        { name: 'Development', value: 75, color: '#f2c811' }
                      ].map(item => (
                        <div key={item.name} className="chart-bar">
                          <div className="bar-label">{item.name}</div>
                          <div className="bar-container">
                            <div 
                              className="bar-fill" 
                              style={{ 
                                width: `${item.value}%`, 
                                backgroundColor: item.color 
                              }}
                            ></div>
                          </div>
                          <div className="bar-value">{item.value}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeDemo === 'form' && (
                <div className="form-demo">
                  <div className="form-builder">
                    <h3>Dynamic Form Builder</h3>
                    <div className="form-preview">
                      <TextField 
                        label="Name" 
                        value={formData.name}
                        onChange={(_, newValue) => setFormData(prev => ({...prev, name: newValue || ''}))}
                        placeholder="Enter your name"
                      />
                      <TextField 
                        label="Email" 
                        value={formData.email}
                        onChange={(_, newValue) => setFormData(prev => ({...prev, email: newValue || ''}))}
                        placeholder="Enter your email"
                      />
                      <Dropdown
                        label="Department"
                        selectedKey={formData.department}
                        onChange={(_, option) => setFormData(prev => ({...prev, department: option?.key as string || ''}))}
                        placeholder="Select department"
                        options={[
                          { key: 'hr', text: 'Human Resources' },
                          { key: 'it', text: 'Information Technology' },
                          { key: 'finance', text: 'Finance' },
                          { key: 'marketing', text: 'Marketing' }
                        ]}
                      />
                      <PrimaryButton 
                        text="Submit Form" 
                        disabled={!formData.name || !formData.email || !formData.department}
                        onClick={() => alert(`Form submitted for ${formData.name}!`)}
                      />
                    </div>
                    <div className="form-data">
                      <h4>Form Data (Real-time)</h4>
                      <pre>{JSON.stringify(formData, null, 2)}</pre>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

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
        </div>      </section>
    </div>
    </>
  );
};

export default App;
