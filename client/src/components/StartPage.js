import React from "react";
import { Link } from "react-router-dom";
import MovingImagesColumn from "./registration/MovingImagesColumn";

const StartPage = () => {
return(
<div>
  <header className="start-page-container">
    <h1 className="start-page-heading">Games on Sale</h1>
    <p className="start-page-subheading">Thousands of games. Even more deals. All in one place.</p>
  </header>

  <MovingImagesColumn /> {MovingImagesColumn}

  <div className="row-padding container">
    <div className="two-third">
      <h1 className="heading">Our Mission</h1>
      <h5 className="subheading">We wanted to create an open source environment for gaming consumers to buy games and share deals they find. </h5>
     <p className="text-grey">It can be hard to know where to buy the games at the best price and for the right platform Games on Sale makes that easier for the user allowing them to have an entire market at their fingertips.</p>
    </div>
  </div>
</div>


)
}
export default StartPage