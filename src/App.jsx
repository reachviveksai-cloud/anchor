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
        <h1>Talk to Anchor</h1>
        <p className="subtext">
          I am Anchor, your private career strategist. I'm here to help you navigate the AI age without the fear.
        </p>
        <p className="instruction">
          Click the "Start a call" button in the bottom right to begin.
        </p>
      </main>

      <footer>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/viveksai/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
          >
            <svg className="linkedin-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://www.viveksai.co"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            www.viveksai.co
          </a>
        </div>
      </footer>

      <atoms-widget assistant-id="698ffdef8f1c0f4c8e267b5c"></atoms-widget>
    </div>
  )
}

export default App
