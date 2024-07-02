// import React from "react";
// import { Link } from "react-router-dom";
// import "../Styles/Result.css";

// const staticResponseData = {
//   medical: [
//     "Based on the symptoms of cough, headache, and nausea, I'll provide some possible medical remedies for the patient. Please note that it's essential to consult a doctor for a proper diagnosis and treatment plan.\n\n*Possible Diagnosis:\nBased on the symptoms, some possible diagnoses could be:\n\n1. Acute Bronchitis\n2. Viral Infection (e.g., Common Cold or Influenza)\n3. Gastroenteritis (Stomach Flu)\n\nMedical Remedies:\nConsidering the patient is a 40-year-old male, here are some possible remedies:\n\nFor Cough:\n\n1. Cough suppressants like dextromethorphan (Robitussin) or guaifenesin (Mucinex) to help relieve coughing.\n2. Expectorants like acetaminophen (Tylenol) or ibuprofen (Advil, Motrin) to help loosen mucus.\n\nFor Headache:\n\n1. Over-the-counter pain relievers like acetaminophen (Tylenol) or ibuprofen (Advil, Motrin) to help alleviate headache.\n2. Rest and hydration to help reduce headache severity.\n\nFor Nausea:\n\n1. Anti-nausea medications like meclizine (Bonine) or dimenhydrinate (Dramamine) to help relieve nausea.\n2. Bismuth subsalicylate (Pepto-Bismol) to help soothe the stomach and reduce nausea.\n\nAdditional Advice:\n\n1. Stay hydrated by drinking plenty of fluids, such as water, clear broths, or electrolyte-rich beverages like sports drinks.\n2. Get plenty of rest to help your body recover.\n3. Use a humidifier to relieve congestion and cough.\n4. Avoid irritants like smoke, dust, and pollution to help reduce coughing.\n5. If symptoms worsen or persist, seek medical attention for further evaluation and treatment.\n\nImportant Notes:*\n\n1. If the patient has a fever over 102°F (39°C), difficulty breathing, or chest pain, seek immediate medical attention.\n2. If the patient has a history of underlying medical conditions, such as heart disease, diabetes, or lung disease, consult a doctor for personalized advice.\n3. Always read and follow the label instructions for any over-the-counter medications, and consult a doctor before taking any new medications.\n\nPlease consult a doctor for a proper diagnosis and treatment plan, as these remedies are only suggestions based on the provided symptoms."
//   ],
//   nutrition: [
//     "Based on your symptoms, medical history, and nutritional needs, I recommend the following dietary advice and meal plan to help alleviate your discomfort:\n\n*Dietary Advice:\n\n1. **Stay Hydrated: Increase your fluid intake to help thin out mucus, soothe a sore throat, and prevent dehydration. Aim for at least 8-10 glasses of water per day. You can also consume herbal teas, clear broths, and electrolyte-rich beverages like coconut water or sports drinks.\n2. **Opt for Easy-to-Digest Foods: Choose bland, gentle-on-the-stomach foods that are easy to digest, such as bananas, rice, applesauce, and toast (BRAT diet). Avoid spicy, fatty, or heavy meals that can exacerbate nausea and discomfort.\n3. **Incorporate Anti-Inflammatory Foods: Add foods rich in antioxidants and omega-3 fatty acids, like fatty fish, nuts, and seeds, to help reduce inflammation and promote overall health.\n4. **Get Plenty of Rest: Aim for 7-8 hours of sleep per night to help your body recover from illness.\n\nSample Meal Plan:\n\nBreakfast\n\n Banana and Avocado Toast: Toasted whole-grain bread topped with mashed banana, sliced avocado, and a sprinkle of salt\n* Herbal Tea or Warm Water with Lemon\n\n*Lunch\n\n Chicken and Rice Bowl: Cooked white rice, boiled chicken breast, and steamed vegetables (like carrots and green beans) seasoned with salt and pepper\n* Clear Broth (chicken or vegetable) with a splash of apple cider vinegar\n\n*Snack\n\n Apple Sauce with a sprinkle of Cinnamon\n* Almonds or Pumpkin Seeds (rich in magnesium and zinc to support immune function)\n\n*Dinner\n\n Gentle Soup: A bland, non-spicy soup like chicken noodle or vegetable soup with crackers on the side\n* Toast with Almond Butter and Banana Slices\n\n*Before Bedtime Snack\n\n Warm Milk with a pinch of Ginger and Honey (to soothe a sore throat and promote relaxation)\n\n*Additional Tips:\n\n Avoid caffeine, dairy products, and heavy meals that can trigger or worsen symptoms.\n* Consider taking supplements like vitamin C, zinc, or probiotics to support immune function and overall health. However, always consult with a healthcare professional before adding any supplements to your diet.\n\nRemember, this is a general meal plan and may not be suitable for everyone. If your symptoms persist or worsen, please consult a healthcare professional for personalized guidance and treatment."
//   ],
//   psychological: [
//     "I understand that you're not feeling well physically, and that can be really tough to deal with. As a psychological assistant, I'm here to offer emotional support and coping strategies to help you navigate this challenging time.\n\nBased on your symptoms, it's possible that you might be experiencing some emotional changes or feelings that are accompanying your physical discomfort. Can you tell me more about how you've been feeling emotionally? Have you noticed any changes in your mood, anxiety levels, or sleep patterns?\n\nIt's also important to acknowledge that your physical symptoms might be affecting your daily life and routine. Have you had to make any adjustments or cancellations due to your symptoms? How have you been coping with the changes and challenges that come with being unwell?\n\nRemember, I'm not a medical doctor, so please do consult with a healthcare professional to rule out any underlying conditions that might be contributing to your symptoms. However, as a psychological assistant, I'm here to provide emotional support and coping strategies to help you feel more grounded and resilient.\n\nLet's explore some coping strategies that might help you manage your symptoms and emotional well-being. Would you be open to trying some relaxation techniques, such as deep breathing, progressive muscle relaxation, or visualization exercises? We could also discuss ways to prioritize self-care, like getting enough rest, staying hydrated, and engaging in activities that bring you comfort and joy.\n\nRemember, you're not alone, and I'm here to support you. What do you think might be helpful to you right now?"
//   ]
// };

// function Results() {
//   const responseData = staticResponseData;

//   return (
//     <div className="results-page">
//       <h2>Medical Assistance Results</h2>
//       <div className="results-container">
//         <section>
//           <h3>Medical</h3>
//           {responseData.medical.map((item, index) => (
//             <p key={index} className="result-text">{item}</p>
//           ))}
//         </section>

//         <section>
//           <h3>Nutrition</h3>
//           {responseData.nutrition.map((item, index) => (
//             <p key={index} className="result-text">{item}</p>
//           ))}
//         </section>

//         <section>
//           <h3>Psychological</h3>
//           {responseData.psychological.map((item, index) => (
//             <p key={index} className="result-text">{item}</p>
//           ))}
//         </section>
//       </div>
//       <Link to="/" className="home-link">Back to Home</Link>
//     </div>
//   );
// }

// export default Results;



import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../Styles/Result.css";

function Results() {
  const location = useLocation();
  const { responseData } = location.state;

  return (
    <div className="results-page">
      <h2>Medical Assistance Results</h2>
      <div className="results-container">
        <section>
          <h3>Medical</h3>
          {responseData.medical.map((item, index) => (
            <p key={index} className="result-text">{item}</p>
          ))}
        </section>

        <section>
          <h3>Nutrition</h3>
          {responseData.nutrition.map((item, index) => (
            <p key={index} className="result-text">{item}</p>
          ))}
        </section>

        <section>
          <h3>Psychological</h3>
          {responseData.psychological.map((item, index) => (
            <p key={index} className="result-text">{item}</p>
          ))}
        </section>
      </div>
      <Link to="/" className="home-link">Back to Home</Link>
    </div>
  );
}

export default Results;
