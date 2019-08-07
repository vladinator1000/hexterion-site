import React from "react"

import Layout from "../components/layout"
import Logo from "../components/Logo/Logo"
import Icon from "../components/Icon"
import SEO from "../components/seo"
import Privacy from "../components/Privacy"

import CallToAction from "../components/CallToAction"

import "./index.css"

const IndexPage = () => (
  <Layout isLandingPage>
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
          <Icon name="youtube" /> Watch Trailer
        </CallToAction>
        <CallToAction
          external
          to="https://store.steampowered.com/app/1057560/Rebound_Dodgeball_Evolved/"
        >
          <Icon name="steam" /> Steam
        </CallToAction>
        <CallToAction to="/press/">
          <Icon name="newspaper" /> Press Kit
        </CallToAction>
      </div>
      <p>
        Coming soon to <Icon name="desktop" /> PC and <Icon name="xbox" /> Xbox
      </p>
      <Privacy />
    </section>
  </Layout>
)

export default IndexPage
