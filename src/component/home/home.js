import React from "react";
import '../home/home.css'
import Pricing from "../pricing/pricing";
import Features from "../Features/features"
import LatestVideos from "../latest_video/latestvideo";
import { Link } from "react-router-dom";
 

let Home = () =>{
    return(
      <>
<div className="bg-dark text-secondary px-4 py-5 text-center" id='img'>

    <div className="py-5">
      <h1 className="display-5 fw-bold text-white">Sayed Abu Hasan</h1>
      <div className="col-lg-6 mx-auto">
        <p className="fs-5 mb-4 text-white">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid  d-sm-flex justify-content-sm-center">
          <Link to="/latest"><button type="button" className="btn btn-outline-info btn-lg ml-2 px-4 me-sm-3 fw-bold">Custom button</button></Link>
         <Link to="/service"> <button type="button" className="btn btn-outline-light ml-2 btn-lg px-4">Secondary</button></Link>
        </div>
      </div>
    </div>
  </div>
  <Pricing/>
  <Features/>
  <LatestVideos/>
  </>
    )
}

export default Home;