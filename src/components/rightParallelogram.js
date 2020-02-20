import React from "react"
import "../styles/global.css"

export default ({ children }) => (
    <div className="box-shadow" style={{alignSelf: `flex-end`, backgroundColor: `white`, maxWidth:`75em`, minWidth:`20em`, padding: `1em 1.75em`, transform:`translateX(3.5em) skew(-20deg)`, width: `95%`}}>
        <div style={{paddingLeft: `2.75em`, paddingRight: `2.5em`, transform:`skew(20deg)`}}>
            {children}
        </div>
    </div>
)

