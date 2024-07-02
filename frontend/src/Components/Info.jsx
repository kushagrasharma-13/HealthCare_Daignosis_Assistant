import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        We bring healthcare to your convenience, offering a comprehensive range of on-demand medical, nutritional, 
        and psychological services tailored to your needs. Our platform uses advanced AI agents to provide expert 
        advice and support whenever you need it.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Medical Assistance"
          description="Our Medical Assistant Agent provides reliable medical remedies based on your symptoms, age, and gender. 
          Connect with our AI-driven assistant for expert medical advice, online prescriptions, and quick refills within minutes."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Nutritional Guidance"
          description="Our Nutrition Assistant Agent offers personalized dietary advice and meal plans based on your nutritional needs
           and goals. Whether you're looking to lose weight, manage a chronic condition, or simply improve your diet, our agent provides
            tailored guidance to help you achieve your health goals."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Psychological Support"
          description="Our Psychological Assistant Agent provides mental health support and coping strategies based on your emotional
           state and experiences. Discuss your concerns and receive expert advice to manage stress, anxiety, depression, and other mental
            health issues."
          icon={faHeartPulse}
        />
      </div>
    </div>
  );
}

export default Info;
