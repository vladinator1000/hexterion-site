import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSteam,
  faYoutube,
  faXbox,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"
import {
  faNewspaper,
  faMap,
  faPlayCircle,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons"
import {
  faGamepad,
  faDesktop,
  faCamera,
  faCode,
  faUsers,
  faStars,
  faRobot,
  faList,
} from "@fortawesome/pro-regular-svg-icons"

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
    case "desktop":
      return faDesktop
    case "xbox":
      return faXbox
    case "camera":
      return faCamera
    case "code":
      return faCode
    case "map":
      return faMap
    case "users":
      return faUsers
    case "stars":
      return faStars
    case "play":
      return faPlayCircle
    case "robot":
      return faRobot
    case "list":
      return faList
    case "twitter":
      return faTwitter
    case "facebook":
      return faFacebook
    case "envelope":
      return faEnvelope
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
