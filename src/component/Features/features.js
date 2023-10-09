import React from "react";


let Link = () =>{
    return(
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <h1 className="text-center">Features</h1>
        <div className="col-10 col-sm-8 col-lg-6">
          <img src="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=600" className=" ; mx-lg-auto img-fluid display-inline-block" alt="Bootstrap Themes" loading="lazy"/>
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
          <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
          </div>
        </div>
      </div>
    )
}

export default Link