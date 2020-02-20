import React from "react"
import PropTypes from "prop-types"

const ContainerCircle = ({bgcolor, children, color}) => (
    <div style={{padding:  `.5em`}}>
        <div className="box-shadow" style={{backgroundColor: `${bgcolor}`, borderRadius: `50%`, color:`${color}`, height: `7em`, paddingTop: `.55em`, textAlign: `center`, width:`7.55em`}}>
            {children}
        </div>
    </div>
    
)

ContainerCircle.propTypes = {
    bgcolor: PropTypes.string,
    color: PropTypes.string
}
  
ContainerCircle.defaultProps = {
    bgcolor: `white`,
    color: `black`
}

export default ContainerCircle
