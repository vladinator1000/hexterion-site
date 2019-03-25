import React from "react"

import logo from "../../images/Logo_White.png"
import "./Logo.css"
import { Link } from "gatsby"

const Logo = () => (
  <Link to="/">
    <img className="logo" alt="Rebound Logo" src={logo} />
  </Link>
)

export default Logo
