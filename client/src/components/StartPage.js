import React from "react";
import { Link } from "react-router-dom";
import MovingImagesColumn from "./registration/MovingImagesColumn";

const StartPage = () => {
return(
<div>
  <header className="start-page-container">
    <h1 className="start-page-heading">Games on Sale</h1>
    <p className="start-page-subheading">Thousands of titles. Even more deals. All in one place.</p>
  </header>

  <MovingImagesColumn /> {MovingImagesColumn}

  <div className="row-padding container">
    <div className="two-third">
      <h1 className="heading">Our Mission</h1>
      <h5 className="subheading">We wanted to create an open source environment for our users to share and vote on the awesome deals they find. <br>
      
      </br> The goal behind this project is that not only for users to save money but also to create a community of people looking to help each other out. </h5>
    </div>
  </div>
</div>
)
}
export default StartPage