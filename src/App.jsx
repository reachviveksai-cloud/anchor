import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [sessionId] = useState(() => 'take-' + Date.now() + '-' + Math.random().toString(36).substring(2, 9));

  useEffect(() => {
    // --- NUCLEAR SESSION RESET ---
    const clearAllStorage = () => {
      // Clear LocalStorage
      Object.keys(localStorage).forEach(key => {
        if (key.toLowerCase().includes('atoms') || key.toLowerCase().includes('smallest')) {
          localStorage.removeItem(key);
        }
      });

      // Clear SessionStorage
      Object.keys(sessionStorage).forEach(key => {
        if (key.toLowerCase().includes('atoms') || key.toLowerCase().includes('smallest')) {
          sessionStorage.removeItem(key);
        }
      });

      // Clear Cookies
      document.cookie.split(";").forEach(cookie => {
        const name = cookie.split("=")[0].trim();
        if (name.toLowerCase().includes('atoms') || name.toLowerCase().includes('smallest')) {
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        }
      });
    };

    clearAllStorage();

    const script = document.createElement('script');
    script.src = "https://unpkg.com/atoms-widget-core@latest/dist/embed/widget.umd.js";
    script.async = true;
    script.onload = () => console.log("Smallest.ai Widget Loaded");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="landing-page">
      {/* SECTION: HERO */}
      <section className="section hero-section">
        <div className="container">
          <main className="card">
            <div className="avatar pulsate">⚓</div>
            <span className="badge">Privacy First</span>
            <h1>Hi, I'm Anchor.</h1>
            <h2 className="hero-subtitle">Your Personal AI Literacy Mentor</h2>
            <p className="subtext">
              The future feels fast, but you don't have to face it alone. <br />
              I am your safe space to ask 'stupid' questions, vent your fears, <br />
              and build real confidence. Step by step. <br />
              No judgment, just a friendly voice.
            </p>
            <p className="instruction"><strong>I'm listening. Tap the button below to say hello.</strong></p>
          </main>
        </div>
      </section>

      {/* SECTION 1: THE PROBLEM */}
      <section className="section problem-section">
        <div className="container">
          <div className="pitch-content">
            <h2 className="section-title">The Silent Panic</h2>
            <p className="section-text">
              79% of leaders mandate AI adoption, yet 64% of the workforce is overwhelmed by the pace of change.
              Traditional upskilling fails because it teaches the skill but ignores the will.
              Anchor removes the 'Fear of Obsolescence' so real learning can begin.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE SOLUTION */}
      <section className="section solution-section">
        <div className="container">
          <div className="pitch-content">
            <h2 className="section-title">Meet Anchor: The Empathy Engine</h2>
            <p className="section-text">
              Anchor is the world's first AI Literacy Mentor that puts psychology before technology.
              It doesn't just teach tools; it rebuilds confidence.
              It is a 24/7 safe space for professionals to confess their fears and build their future.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW IT WORKS */}
      <section className="section how-works-section">
        <div className="container">
          <h2 className="section-title text-center">How It Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <h3>1. De-Escalate</h3>
              <p>Validates fears and lowers cortisol levels.</p>
            </div>
            <div className="step-card">
              <h3>2. Diagnose</h3>
              <p>Identifies current AI literacy levels instantly.</p>
            </div>
            <div className="step-card">
              <h3>3. Upskill</h3>
              <p>Delivers role-specific micro-lessons (from Novice to Agentic).</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHO IS THIS FOR? */}
      <section className="section target-section">
        <div className="container">
          <h2 className="section-title">Who Is This For?</h2>
          <ul className="target-list">
            <li><strong>Governments:</strong> For large-scale workforce transition programs.</li>
            <li><strong>Enterprise HR:</strong> To upskill employees without the shame of 'performance reviews.'</li>
            <li><strong>Individuals:</strong> For the professional who needs a private mentor.</li>
          </ul>
        </div>
      </section>

      <footer className="landing-footer">
        <a href="https://www.viveksai.co" target="_blank" rel="noopener noreferrer">www.viveksai.co</a>
      </footer>

      <atoms-widget
        assistant-id="698ffdef8f1c0f4c8e267b5c"
        session-id={sessionId}
        data-session-id={sessionId}
        userId={sessionId}
      ></atoms-widget>
    </div>
  )
}

export default App
