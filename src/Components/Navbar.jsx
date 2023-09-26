import React, { useState } from 'react'
import { Link } from "react-router-dom"



const Navbar = () => {
  // const [searchQuery, setSearchQuery] = useState('')

  // const handleSearchInputChange = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to= '/' className="navbar-brand" href="#">Another Man's Treasure</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link to= '/' className="nav-item nav-link active" href="#">Home <span className="sr-only"></span></Link>
      <Link to= '/Products' className="nav-item nav-link" href="#">Products</Link>
      <Link to= '/Cart' className="nav-item nav-link" href="#">Cart</Link>
      <Link to= '/SignIn' className="nav-item nav-link" href="#">Sign In</Link>
    </div>
  </div>
</nav>
  );
}

export default Navbar