import React from "react";
import Card from "./Card";

const Pricing = () => {
  return (
    <div className="pricing-container">

      <div className="pricing-description" >

        <div className="detox-container">
          <h2>
            DEATOX <br /> PACKAGE
          </h2>
        </div>

        <div>
          <h3>Get your fitness plan for free!</h3>
          <p>
            Join the Deatox community today and start your journey towards a
            healthier and happier you.{" "}
          </p>
          <button>TRY NOW</button>
        </div>
        
      </div>




      <div className="cards-container">
        <Card />
      </div>
    </div>
  );
};

export default Pricing;
