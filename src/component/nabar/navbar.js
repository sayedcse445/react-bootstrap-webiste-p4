import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button'; 
import { Link } from "react-router-dom";

let Header = () => {
  return (
    <Container fluid>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/pricing">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/features">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/latest">LatestVideos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/service">Service</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
    <form classNameName="btn " role="search">
          <Link to="/sigup"> <Button to="" className="mr-2 btn btn-primary">Signup</Button></Link>
          <Button to="" className="mr-2 btn btn-success">Login</Button>
        </form>
  </div>
</nav>
</Container>
  )
}

export default Header;


        