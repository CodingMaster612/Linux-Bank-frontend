import React from "react";
import '../css/Home.css'
import linux from '../img/linux.png'

function Homes() {
    return (
      <div className="page-wrapper">
        <div>
        <img className= "" src={linux} alt="img-linux"/> 
        </div>
        <div>
          <p>Welcome To Linux Bank!</p>
        </div>
        
      </div>
    );
  }
  export default Homes;