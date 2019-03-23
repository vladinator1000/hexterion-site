import React from "react"

import Layout from "../components/layout"
import Logo from "../components/Logo/Logo"
import SEO from "../components/seo"

import CallToAction from "../components/CallToAction"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Rebound"
      keywords={["rebound", "dodgeball", "game", "sci-fi", "scifi"]}
    />
    <Logo />

    <section className="content">
      <p className="description">
        Dive into intense local multiplayer dodgeball. An out of control mess of
        crazed rebounding action! There is nowhere to hide with the top down
        camera, so stay on the move! 2-4 players face off in a free-for-all
        deathmatch arena. One hit and you’re out.
      </p>
      <div className="button-group">
        <CallToAction
          className="gradient-border"
          external
          color="primary"
          to="https://www.youtube.com/watch?v=YH5oCHWW4tk"
        >
          Watch Trailer
        </CallToAction>
        <CallToAction to="/press/">Press Kit</CallToAction>
      </div>
    </section>
  </Layout>
)

export default IndexPage
