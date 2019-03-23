import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO
      title="Rebound Press Kit"
      keywords={[
        "rebound",
        "dodgeball",
        "game",
        "sci-fi",
        "scifi",
        "press",
        "kit",
        "presskit",
      ]}
    />
    <h1>Press Kit</h1>
    <p>Coming soon...</p>
    <Link to="/">Back to Home</Link>
  </Layout>
)

export default SecondPage
