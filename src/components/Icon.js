import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSteam, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faNewspaper } from "@fortawesome/free-regular-svg-icons"
import { faGamepad } from "@fortawesome/pro-regular-svg-icons"

function getIcon(name = "") {
  switch (name.toLowerCase()) {
    case "steam":
      return faSteam
    case "youtube":
      return faYoutube
    case "newspaper":
      return faNewspaper
    case "gamepad":
      return faGamepad
    default:
      return faGamepad
  }
}

export default function Icon({ name, style }) {
  return (
    <FontAwesomeIcon
      style={{ maxWidth: 32, height: "auto", ...style }}
      className="shadow"
      icon={getIcon(name)}
    />
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}
