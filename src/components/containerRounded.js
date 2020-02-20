import React from "react"
import PropTypes from "prop-types"

const ContainerRounded = ({bgcolor, children, color}) => (
    <div style={{padding:  `.5em`}}>
        <div className="box-shadow" style={{backgroundColor: `${bgcolor}`, borderRadius: `20px`, color:`${color}`, padding:`.5em`, textAlign: `center`, width:`auto`}}>
        {children}
        </div>
    </div>
    
)

ContainerRounded.propTypes = {
    bgcolor: PropTypes.string,
    color: PropTypes.string
}
  
ContainerRounded.defaultProps = {
    bgcolor: `white`,
    color: `black`
}

export default ContainerRounded
