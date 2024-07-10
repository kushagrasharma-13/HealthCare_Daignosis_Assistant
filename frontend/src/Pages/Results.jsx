import React from "react";
import { useLocation, Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";
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
          <div className="result-text">
            <Markdown>{output.medical}</Markdown>
          </div>
        </section>

        <section>
          <h3>Nutrition</h3>
          <div className="result-text">
            <Markdown>{output.nutrition}</Markdown>
          </div>
        </section>

        <section>
          <h3>Psychological</h3>
          <div className="result-text">
            <Markdown>{output.psychological}</Markdown>
          </div>
        </section>
      </div>
      <Link to="/" className="home-link">Back to Home</Link>
    </div>
  );
}

export default Results;
