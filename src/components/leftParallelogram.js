import React from "react"
import "../styles/global.css"

export default ({ bgcolor, fontColor, children }) => (
    <div className="box-shadow" style={{alignSelf: `flex-start`, backgroundColor: `${bgcolor}`, color:`${fontColor}`, maxWidth:`55em`, minWidth:`20em`, padding: `1em 1.75em`, transform:`translateX(-5em) skew(-20deg)`, width: `90%`}}>
        <div style={{paddingLeft: `3.5em`, paddingRight: `4em`, transform:`skew(20deg)`}}>
            {children}
        </div>
    </div>
)

