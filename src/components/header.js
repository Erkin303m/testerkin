import React from 'react'
// import Link from "react-router-dom"

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bgHeader">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Online shop</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="/" className="nav-link active">Home</a>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link active">Login</a>
                {/* <Link to="/login">Login 2</Link> */}
              </li>
              <li className="nav-item">
                <a href="/profile" className="nav-link active">Profile</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header