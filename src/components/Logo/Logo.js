import React from "react"

import logo from "../../images/Logo_White.png"
import "./Logo.css"
import { Link } from "gatsby"

const Logo = () => (
  <Link to="/">
    <img className="logo" alt="Rebound Logo" src={logo} />
    <h1 className="subtitle">DODGEBALL EVOLVED</h1>
  </Link>
)

export default Logo
