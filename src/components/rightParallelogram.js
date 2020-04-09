import React from "react"
import "../styles/global.css"

export default ({ children }) => (
    <div className="box-shadow" style={{alignSelf: `flex-end`, backgroundColor: `white`, maxWidth:`75em`, minWidth:`20em`, padding: `1em 1.75em`, transform:`translateX(3.5em) skew(-10deg)`, width: `95%`}}>
        <div style={{paddingLeft: `3em`, paddingRight: `3em`, transform:`skew(10deg)`}}>
            {children}
        </div>
    </div>
)

