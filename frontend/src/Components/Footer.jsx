import React from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
            Medical Assistance System <span className="ft-sign">+</span>
            </p>
            <p className="ft-description">
            Our Medical Assistant Agent provides reliable medical remedies based on your symptoms, age, and gender. 
            Connect with our AI-driven assistant for expert medical advice, online prescriptions, and quick refills within minutes.
            </p>
          </div>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Services</p>
          <ul className="ft-list-items">
            <li>
              <a href="/#contacts">Emergency Care</a>
            </li>
            <li>
              <a href="/#contacts">Heart Disease</a>
            </li>
            <li>
              <a href="/#contacts">Dental Care</a>
            </li>
            <li>
              <a href="/#contacts">Prescription</a>
            </li>
            <li>
              <a href="/#contacts">Insights for doctors</a>
            </li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li>
              <Link to={"/legal"}>General Info</Link>
            </li>
            <li>
              <Link to={"/legal"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/legal"}>Terms of Services</Link>
            </li>
            <li>
              <Link to={"/legal"}>Consultations</Link>
            </li>
            <li>
              <Link to={"/legal"}>How it Works</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:sharmakushagra295@gmail.com">support@medicalassistance.com</a>
            </li>
            <li>
              <a href="tel:+91 955 748 9354">+91 955 748 9354</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>©2024 Medical Assistance System . All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
