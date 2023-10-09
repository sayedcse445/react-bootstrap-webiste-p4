import React from 'react'
import { Container } from 'react-bootstrap'

let Contact = () => {
  return (
    <Container fluid>
    <form className="row g-3">
        
  <div className="col-md-6">
    <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name"autoComplete='off' required/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4" autoComplete='off' required/>
  </div>
  <div className="col-6">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" autoComplete='off' required/>
  </div>
  <div className="col-6">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>Dhaka</option>
      <option>khulna</option>
      <option>Rangpur</option>

    </select>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity" required/>
  </div>
 
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">Message</label>
    <textarea rows='6' type="text" className="form-control" id="inputAddress2" placeholder="" autoComplete='off' required ></textarea>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-success">Submit</button>
  </div>
</form>
</Container>
  )
}

export default Contact
