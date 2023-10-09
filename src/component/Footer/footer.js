import React from 'react'

let Footer =() => {
  return (
    <div>
      <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary"><i className="fs-4 fab fa-twitter-square"></i> </a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary"><i className="fs-4 fab fa-github-square"></i> </a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary"><i className="fs-4 fab fa-youtube-square"></i> </a></li>
      
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary"><i className="fs-4 fab fa-facebook-square"></i> </a></li>
    </ul>
    <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
  </footer>
    </div>
  )
}

export default Footer