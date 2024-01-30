import React from "react";
import Card from "./Card";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-description">
        <div className="detox-container">
          <h2 className="detox">DEATOX</h2>
          <h2 className="package">PACKAGE</h2>
        </div>

        <div className="fitness-plan-container">
          <h3>Get your fitness plan for free!</h3>
          <p>
            Join the Deatox community today and start your journey towards a
            healthier and happier you.{" "}
          </p>
          <button className="detox-btn">TRY NOW</button>
        </div>
      </div>

      <div className="cards-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Pricing;
