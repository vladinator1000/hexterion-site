import React from "react"
import { Link } from "gatsby"

import Logo from "../components/Logo"
import Layout from "../components/layout"
import SEO from "../components/seo"

const copy = "We (Hexterion) do not store or collect user data."

export default function Privacy() {
  return (
    <Layout>
      <SEO title="Privacy" description={copy} keywords={["rebound", "dodgeball", "privacy"]} />
      <Logo />

      <section className="card">
        <h1 style={{ marginRight: "0.618rem" }}>Privacy</h1>
        <p style={{ textAlign: "center" }}>
          {copy}
        </p>
      </section>
      <Link to="/">Back to Home</Link>
    </Layout>
  )
}
