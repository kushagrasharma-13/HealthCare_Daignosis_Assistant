import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/diagnos");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">❤️ Welcome to Medical Assistance System</p>
          <h2 className="text-title">
          Your Comprehensive Health Companion
          </h2>
          <p className="text-descritpion">
          Our Medical Assistance System is designed to provide you with tailored medical, nutritional, and psychological support. 
          With advanced AI agents, we offer reliable advice and personalized care to help you manage your health effectively.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Click To Diagnos
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>99% +</p>
              <p>Accurate Results</p>
            </div>

            <div className="text-stats-container">
              <p>LLama 3</p>
              <p>Meta Model</p>
            </div>

            <div className="text-stats-container">
              <p>70</p>
              <p>Billion+ Parameters</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src='.\src\Assets\doctor_home.png' alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
