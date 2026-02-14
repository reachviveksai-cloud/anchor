import React, { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
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
    <div className="container">
      <main className="card">
        <span className="badge">Privacy First</span>
        <h1>Meet Anchor</h1>
        <h2>Your Personal AI Literacy Mentor</h2>
        <p className="subtext">
          Don't let the future leave you behind. <br />
          I am here to guide you from anxiety to AI fluency <br />
          one simple step at a time.<br />
          No judgment, just progress.
        </p>
        <p className="instruction"><strong>Click the "Start a call" button in the bottom right to begin.</strong></p>
      </main>

      <footer style={{ marginTop: '20px', fontSize: '0.9em', opacity: 0.6 }}>
        <a href="https://www.viveksai.co" style={{ textDecoration: 'none', color: '#4a5568' }} target="_blank" rel="noopener noreferrer">www.viveksai.co</a>
      </footer>

      <atoms-widget assistant-id="698ffdef8f1c0f4c8e267b5c"></atoms-widget>
    </div>
  )
}

export default App
