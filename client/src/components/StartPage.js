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

<div className="moving-background">
  <MovingImagesColumn /> {MovingImagesColumn}
</div>
  <div className="start-bottom-text">
    <div className="two-third">
      <h1 className="heading start-bottom-title-text">Our Mission</h1>
      <h5 className="subheading start-bottom-text start-center-text">We're building an open-source platform where users can upload and discover fantastic game deals. Our goal is to create a vibrant community where users can easily share and find great offers. Through upvoting and downvoting, we ensure that the best deals rise to the top. Join us in this thrilling journey as we reshape the gaming landscape, one deal at a time.</h5>
    </div>
  </div>
</div>
)
}
export default StartPage