import React from "react"
import PropTypes from "prop-types"

const ContainerRoundedAssym = ({bgcolor, children, color}) => (
    <div style={{padding:  `.5em`}}>
        <div className="box-shadow" style={{backgroundColor: `${bgcolor}`, borderRadius: `30px 5px`, color:`${color}`, padding:`.5em`, textAlign: `center`, width:`auto`}}>
        {children}
        </div>
    </div>
    
)

ContainerRoundedAssym.propTypes = {
    bgcolor: PropTypes.string,
    color: PropTypes.string
}
  
ContainerRoundedAssym.defaultProps = {
    bgcolor: `white`,
    color: `black`
}

export default ContainerRoundedAssym
