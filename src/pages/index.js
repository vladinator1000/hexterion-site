import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Logo from "../components/Logo/Logo"
import Icon from "../components/Icon"
import SEO from "../components/seo"

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
        <CallToAction external to="http://bit.ly/ReboundSteam">
          <Icon name="steam" /> Steam
        </CallToAction>
        <CallToAction external to="http://bit.ly/ReboundXbox">
          <Icon name="xbox" /> Xbox
        </CallToAction>
        <CallToAction to="/press/">
          <Icon name="newspaper" /> Press Kit
        </CallToAction>
      </div>
      <p>
        Coming <b>20 September 2019</b> to <Icon name="desktop" /> PC and{" "}
        <Icon name="xbox" /> Xbox
      </p>
      <Link style={{ color: "hsla(360, 0%, 46%, 1)" }} to="/privacy">
        Privacy
      </Link>
    </section>
  </Layout>
)

export default IndexPage
