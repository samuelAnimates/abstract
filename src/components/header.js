import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div style={{padding: `1em .5em .5em .5em`}}>
    <header className="bg-color-springfrost box-shadow" style={{margin: `auto`, maxWidth: `22em`, minWidth: `13em`, padding: `1em 0`, textAlign: `center`, transform: `skew(20deg)`, width: `50%`}}>
      <h1 style={{display:`inline-block`, transform:`skew(-20deg)`}}>
        <span>{siteTitle}</span><span role="img" aria-label="Sparkle emoji" style={{fontSize:`.66em`}}>✨</span>
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
