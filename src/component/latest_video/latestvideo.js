import React from 'react'
import Service from '../../service'

let LatestVideos = () => {
  return (
    <>
    <div className="album py-5 bg-body-tertiary">
      <h1 className='text-center my-5'>Latest Videos</h1>
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
            <img src='https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img-1'/>
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                  <button type="button" className="btn btn-outline-info">Watch
                  </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm">
            <img src='https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='img-2'/>
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                  <button type="button" className="btn btn-outline-info">Watch
                  </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src='https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='img-3'/>
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                  <button type="button" className="btn btn-outline-info">Watch
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  </div>
  <Service/>
  </>
  )
}

export default LatestVideos