import React from "react"
import PropTypes from "prop-types"

const ContainerRectangle = ({bgcolor, children, color}) => (
    <div style={{padding:  `.5em`}}>
        <div className="box-shadow" style={{backgroundColor: `${bgcolor}`, color:`${color}`, padding:`.5em`, textAlign: `center`, width:`auto`}}>
        {children}
        </div>
    </div>
    
)

ContainerRectangle.propTypes = {
    bgcolor: PropTypes.string,
    color: PropTypes.string
}
  
ContainerRectangle.defaultProps = {
    bgcolor: `white`,
    color: `black`
}

export default ContainerRectangle
