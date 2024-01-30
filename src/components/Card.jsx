import React from "react";
import vector from "../assets/vector.svg";
import logo from "../assets/logo-white.png";

const Card = () => {
  return (
    <div className="card-container">
      <div>
        <img src={vector} alt="card1" />
      </div>
      <div className="card-logo">
        <img src={logo} alt="card2" />
      </div>
      <div className="card">
        <div className="card-heading">
          <h2>Yearly</h2>
          <p> $99.99</p>
        </div>

        <ul className="card-list">
          <li>Customized workout plans </li>
          <li>Access to healthy recipes </li>
          <li>Advanced health tracking tools </li>
          <li>Personalized recommendations based on your goals</li>
          <li>Unlimited customer support </li>
        </ul>
        <button>GET NOW</button>
      </div>
    </div>
  );
};

export default Card;
