import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSteam, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faNewspaper } from "@fortawesome/free-regular-svg-icons"

function getIcon(name = "") {
  switch (name.toLowerCase()) {
    case "steam":
      return faSteam
    case "youtube":
      return faYoutube
    case "newspaper":
      return faNewspaper
  }
}

export default function Icon(props) {
  return <FontAwesomeIcon className="shadow" icon={getIcon(props.name)} />
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}
