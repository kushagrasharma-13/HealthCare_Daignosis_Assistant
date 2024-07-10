import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../Styles/Result.css";

function Results() {
  const location = useLocation();
  const { output } = location.state;

  return (
    <div className="results-page">
      <h2>Medical Assistance Results</h2>
      <div className="results-container">
        <section>
          <h3>Medical</h3>
            <p className="result-text">{output.medical}</p>
        </section>

        <section>
          <h3>Nutrition</h3>
          <p className="result-text">{output.medical}</p>
        </section>

        <section>
          <h3>Psychological</h3>
          <p className="result-text">{output.medical}</p>
        </section>
      </div>
      <Link to="/" className="home-link">Back to Home</Link>
    </div>
  );
}

export default Results;
