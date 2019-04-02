import React from "react"
import { Link } from "gatsby"

import Logo from "../components/Logo"
import Layout from "../components/layout"
import Icon from "../components/Icon"
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
    <h1 style={{ marginRight: "0.618rem" }}>Press Kit</h1>
    <section className="card">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://drive.google.com/open?id=1v9nxULy7mm272h4GthNujHxVlMHFaiYK"
      >
        <h2 style={{ margin: 0 }}>
          <Icon name="camera" />{" "}
          <span style={{ color: "rgb(151, 151, 255)" }}>Images and videos</span>
        </h2>
      </a>
    </section>
    <section className="card" id="fact-sheet">
      <a href="#developer">
        <h2>
          <Icon name="code" /> Developer
        </h2>
      </a>
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
        <Icon name="twitter" /> /reboundthegame
      </a>
      <br />
      <a
        href="https://facebook.com/reboundthegame"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="facebook" /> /reboundthegame
      </a>
      <span>
        <Icon name="envelope" /> hello (at) hexterion (dot) com
      </span>
    </section>
    <section className="card" id="features">
      <a href="#features">
        <h2>
          <Icon name="stars" /> Game Features
        </h2>
      </a>

      <p>
        Rebound Dodgeball Evolved is a fast, competitive, multiplayer Sci-fi
        themed dodgeball game. The top down camera and twin stick shooter
        controls makes it easy to just pick up and play however the fast-paced
        nature of the game gives it a high skill ceiling. Players can team up
        and play against each other both online and offline with any combination
        of maps, Mutators, and gamemodes.
      </p>

      <ul style={{ marginLeft: 0 }}>
        <li>
          <Icon name="gamepad" />
          <p>
            <b>Mutators</b>: Change up the rules by changing the behaviour of
            the dodgeballs or through adding new abilities. Instead of
            dodgeballs slowing down over time, Nitro Ball speeds the ball up
            with each collision resulting in a hectic game that only gets more
            dangerous over time. Time Glitch throws a spanner in the works by
            sending everyone back in time to where they were shortly before, pay
            attention and you can save your past self from a dodgeball!
          </p>
        </li>
        <li>
          <Icon name="users" />
          <p>
            <b>Multiplayer</b>: Play locally and online with up to 4 players.
            Team up with your friends or play free-for-all to see who truly is
            the dodgeball champion.
          </p>
        </li>
        <li>
          <Icon name="map" />
          <p>
            <b>Maps</b>: With over 15 unique maps you must adapt quickly to take
            advantage of the new geometry and stage hazards to ensure the win.
            Watch out for the teleporters!
          </p>
        </li>
        <li>
          <Icon name="list" />
          <p>
            <b>Playlists</b>: Create a playlist with any combination of maps and
            Mutators for the ultimate customised experience or play one of the
            pre-made themed playlists.
          </p>
        </li>
        <li style={{ margin: 0 }}>
          <Icon name="robot" />
          <p>
            <b>Bots</b> and single player challenges
          </p>
        </li>
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
