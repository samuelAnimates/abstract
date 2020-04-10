import React from "react"
import EndPlayButton from "./endPlayButton"


const Play08 = React.forwardRef((props, ref) => (

    <article role="dialog" style={{backgroundColor: `rgba(0, 0, 0, 0.66)`, display: `${props.displayStyle}`, height: `100vh`, padding:  `.25em`, position: `fixed`, left: `0`, top:`0`, width:`100vw`, zIndex:`2`}}>
        <div role="document" style={{backgroundColor: `${props.bgcolor}`, color:`${props.color}`, height: `85vh`, overflowY: `scroll`, margin:`auto`, maxWidth:`60em`, padding:`.5em`, textAlign: `left`, width:`85%`, zIndex:`3`}}>
            <div>
                <h2  style={{textAlign: `center`}}>A zine</h2>
                <p>
                    This is a zine. It’s meant to help each person in a conversation about an academic-community partnership document an evaluative conversation.
                </p>
                <p>
                    It’s made by folding up and cutting an executive summary of an academic-community partnership. It has spaces to take notes on each phase of a 4-phase conversation about a community engagement process, with a built-in break to reflect on the actual conversation. And then at the end you turn it into a zine by giving it a front and back cover. The front cover depicts a success story. And the back depicts a failure.
                </p>
                <p>
                    Each person has their own interpretation of the conversation and of the partnership itself, even in light of standard metrics that might be used to evaluate it.
                </p>
            </div>
            <div style={{margin:`auto`, textAlign:`center`}}>
                <EndPlayButton playid={ props.playid } onClickFunction={ props.onClickEndButton }  />
            </div>
        </div>
    </article>


))

export default Play08