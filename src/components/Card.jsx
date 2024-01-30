import React from 'react'

const Card = () => {
  return (
    <div className='card-container'>
      <div>
        <img src='src\assets\vector.svg' alt='card1' />
      </div>   
      <div className='card-list'>
        <h2>Yearly</h2>
        <p> $99.99</p>

        <ul>
            <li>Customized workout plans </li>
            <li>Access to healthy recipes </li>
            <li>Advanced health tracking tools </li>
            <li>Personalized recommendations based on your goals</li>
            <li>Unlimited customer support  </li>
        </ul>
        <button>GET NOW</button>

      </div>
    </div>
  )
}

export default Card