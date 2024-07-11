import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/DiagnosForm.css";
import { PUBLIC_IP } from '../../config.json'

function DiagnosForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("Male");
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      name,
      symptoms,
      age,
      gender,
    };

    try {
      console.log(`${PUBLIC_IP}`);
      const backendUrl = `http://${PUBLIC_IP}:8000/api/health-recommendation/`;
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const jsonResponse = await response.json();
      const output = {
        "medical": jsonResponse.medical[0],
        "nutrition": jsonResponse.nutrition[0],
        "psychological": jsonResponse.psychological[0]
      };
      console.log(output);

      if (!response.ok) {
        throw new Error("Failed to submit form data");
      }

      toast.success("Request for Assistance Submitted!", {
        position: "top-center",
        transition: Slide,
      });

      navigate("/results", { state: { output } });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form. Please try again later.", {
        position: "top-center",
        transition: Slide,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Health <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Medical Diagnosis Assistance</span>
        </h2>

        <form className="form-content" onSubmit={handleFormSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <br />
          <label>
            Please describe your symptoms:
            <textarea
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              required
            ></textarea>
          </label>

          <br />
          <label>
            Please enter your age:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </label>

          <br />
          <label>
            Please select your gender:
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <br />
          <button type="submit" className="text-appointment-btn" disabled={isLoading}>
            {isLoading ? <div className="spinner"></div> : "Get Assistance"}
          </button>
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2024 Medical Assistance System. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default DiagnosForm;
