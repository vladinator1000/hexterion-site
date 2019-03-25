import React from "react"
import { Link } from "gatsby"

import theme from "../../theme"

const getStyle = color => ({
  color: "white",
  padding: theme.sizes.xs,
  marginBottom: theme.sizes.xs,
  marginRight: theme.sizes.xs,

  fontSize: theme.sizes.medium,
  fontWeight: "bold",
  // border: "2px solid white",
  // background: theme.colors[color] || "black",
  borderRadius: 3,
  // background: "#1d1f20",
  fontFamily: "'Orbitron', sans-serif",
  // boxShadow: "1px 1px 2px black",
  textShadow: "0.5px 0.5px 1px black",
})

function CallToAction({ to, external, children, className, color, ...props }) {
  const style = getStyle(color)

  if (external) {
    return (
      <a
        style={style}
        className={className}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  return (
    <Link style={style} className={className} to={to} {...props}>
      {children}
    </Link>
  )
}

export default CallToAction
