/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

// import Header from "./header"
// import theme from "../theme"
import "./layout.css"

function getStyle(isLandingPage = false) {
  if (isLandingPage) {
    return {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
    }
  }

  return {}
}

const Layout = ({ isLandingPage, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <main style={getStyle(isLandingPage)}>{children}</main>
        {/* <footer style={{ minHeight: "60px" }}>
          © {new Date().getFullYear()} Hexterion
        </footer> */}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
