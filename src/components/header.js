import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/logo.js"

const Header = ({ siteTitle }) => (
  <div style={{padding: `1em .5em .5em .5em`}}>
    <header className="bg-color-springfrost box-shadow" style={{margin: `auto`, maxWidth: `22em`, minWidth: `13em`, padding: `1em 0`, textAlign: `center`, transform: `skew(20deg)`, width: `50%`}}>
      <div style={{display:`inline-block`, transform:`skew(-20deg)`}}><Logo/></div>
      <h1 style={{display:`inline-block`, transform:`skew(-20deg)`}}>
        {siteTitle}
      </h1>
    </header>
  </div>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Abstract.`,
}

export default Header
