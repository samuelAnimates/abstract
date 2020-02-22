import React from "react"
import EndPlayButton from "../components/endPlayButton"

const Play01  = props => (
    <article role="dialog" style={{backgroundColor: `rgba(0, 0, 0, 0.66)`, height: `100vh`, padding:  `.5em`, position: `fixed`, left: `0`, top:`0`, width:`100vw`, zIndex:`2`}}>
        <div role="document" style={{backgroundColor: `${props.bgcolor}`, color:`${props.color}`, height: `85vh`, overflowY: `scroll`, margin:`auto`, maxWidth:`60em`, padding:`.5em`, textAlign: `left`, width:`85%`, zIndex:`3`}}>
            <div>
                <p>
                    Hee's my text and stuff
                </p>
                <p>
                    and here
                </p>
            </div>
            <div style={{margin:`auto`, textAlign:`center`}}>
                <EndPlayButton onClickFunction={ props.onClickFunction }/>
            </div>
        </div>
    </article>
    
)

export default Play01