import React from "react";
import Doctor from "../Assets/doctor_group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to Medical Assistance System, where your health and well-being are our top priorities. We offer a comprehensive
           range of on-demand medical, nutritional, and psychological services through advanced AI-driven assistants. Our platform
            provides expert advice and personalized care, ensuring you receive the support you need, whenever you need it.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Connect with an Assistant"
          description="Our AI-driven Medical, Nutrition, and Psychological Assistants are available to provide you with personalized 
          advice and treatment plans. Whether it's medical remedies, dietary guidance, or mental health support, our assistants are here
           to help."
        />

        <SolutionStep
          title="Make a Schedule"
          description="Easily schedule your consultations at a time that suits you. Our platform is designed to fit seamlessly into your
           life, providing you with the flexibility to get the care you need, when you need it."
        />

        <SolutionStep
          title="Receive Expert Care"
          description="Our dedicated AI assistants offer expert advice and personalized treatment plans tailored to your unique needs. 
          From managing chronic conditions to improving your diet and mental health, we are committed to helping you achieve your best 
          possible health."
        />
      </div>
    </div>
  );
}

export default About;
