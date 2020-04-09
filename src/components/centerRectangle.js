import React from "react"
import "../styles/global.css"

export default ({ bgcolor, fontColor, children }) => (
    <div className="box-shadow" style={{backgroundColor: `${bgcolor}`, color:`${fontColor}`, margin:`auto`, maxWidth:`55em`, minWidth:`20em`, padding: `1em`, width: `90%`}}>
        <div style={{ margin: `auto`, paddingLeft: `2em`, paddingRight: `2em`}}>
            {children}
        </div>
    </div>
)

