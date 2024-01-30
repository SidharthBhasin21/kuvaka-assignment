import React from "react";

const Features = () => {
  return (
    <div className="features-container">
      <div className="features">
        <h2>FEATURES</h2>

        <div className="features-section">
          <div className="feature-item">
            <h3 className="feature-heading">
              PERSONALISED <br /> RECOMMENDATIONS
            </h3>
            <p className="feature-description">
              DEATOX uses AI to analyze user data such as age, gender, weight,
              height, dietary preferences, and fitness goals to generate
              personalized meal and fitness plans.
            </p>
          </div>

          <div className="feature-item">
            <h3 className="feature-heading">MEAL PLANNING</h3>
            <p className="feature-description">
              DEATOX generates weekly meal plans based on your dietary
              preferences, calorie requirements, and nutrient needs.
            </p>
          </div>

          <div className="feature-item">
            <h3 className="feature-heading">FITNESS PLANNING</h3>
            <p className="feature-description">
              DEATOX generates weekly fitness plans based on your fitness goals,
              workout preferences, and fitness level.
            </p>
          </div>

          <div className="feature-item">
            <h3 className="feature-heading">PROGRESS TRACKING</h3>
            <p className="feature-description">
              DEATOX allows you to track their progress towards their fitness
              goals by tracking metrics such as weight, body fat percentage, and
              workout intensity.
            </p>
          </div>

          <div className="feature-item">
            <h3 className="feature-heading">PROGRESS TRACKING</h3>
            <p className="feature-description">
              DEATOX uses machine learning algorithms to learn from your data
              and improve the accuracy and relevance of its meal and fitness
              recommendations over time
            </p>
          </div>

          <div className="feature-question">
            <h3>Get your fitness plan for free!</h3>
            <p>
              Join the Deatox community today and start your journey towards a
              healthier and happier you.{" "}
            </p>
            <button>TRY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
