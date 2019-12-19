import PropTypes from "prop-types"
import React from "react"
import "typeface-patrick-hand-sc"


const Header = ({ siteTitle }) => (
  <div className="padding-bottom-1em padding-top-1em">
    <header className="bg-color-springfrost box-shadow margin-auto padding-bottom-1em padding-top-1em skew-20deg text-center width-50pc">
      <h1 className="skew-neg20deg">
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
