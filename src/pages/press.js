import React from "react"
import { Link } from "gatsby"

import Logo from "../components/Logo"
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
    <Logo />
    <span style={{ display: "flex", alignItems: "baseline" }}>
      <h1 style={{ marginRight: "0.618rem" }}>Press Kit</h1>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://drive.google.com/open?id=1v9nxULy7mm272h4GthNujHxVlMHFaiYK"
      >
        Download images and videos
      </a>
    </span>
    <section className="card" id="fact-sheet">
      <a href="#fact-sheet">
        <h2>Fact Sheet</h2>
      </a>
      <h4>Developer</h4>
      <p>
        We are Hexterion. A studio made up of graduates from Glasgow Caledonian
        University, founded after winning the 2016 Dare to be Digital
        competition and being nominated for the “Ones to Watch” award at the
        2017 BAFTA game awards with Rebound. Rebound is the first official game
        produced by Hexterion
      </p>
      <h4>Social and Contact</h4>
      <a
        href="https://twitter.com/reboundthegame"
        target="_blank"
        rel="noopener noreferrer"
      >
        twitter.com/reboundthegame
      </a>
      <br />
      <a
        href="https://facebook.com/reboundthegame"
        target="_blank"
        rel="noopener noreferrer"
      >
        facebook.com/reboundthegame
      </a>
      <span>hello (at) hexterion (dot) com</span>
    </section>
    <section className="card" id="features">
      <a href="#features">
        <h2>Game Features</h2>
      </a>

      <ul>
        <li>
          Fast-paced, <b>sci-fi dodgeball</b> with a top-down perspective
        </li>
        <li>
          2-4 players local and online deathmatch <b>multiplayer</b>
        </li>
        <li>
          Rule altering <b>mutators</b> such as bomb ball, tether ball and time
          glitch
        </li>
        <li>Combine different maps and mutators for deep variety</li>
        <li>Includes bots and single player challenges</li>
      </ul>
    </section>
    {/* <section className="card" id="videos">
      <a href="#videos">
        <h2>Videos</h2>
      </a>
    </section> */}
    <Link to="/">Back to Home</Link>
  </Layout>
)

export default SecondPage
