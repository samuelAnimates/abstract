import React from "react"
import EndPlayButton from "./endPlayButton"


const Play07 = React.forwardRef((props, ref) => (

    <article role="dialog" style={{backgroundColor: `rgba(0, 0, 0, 0.66)`, display: `${props.displayStyle}`, height: `100vh`, padding:  `.25em`, position: `fixed`, left: `0`, top:`0`, width:`100vw`, zIndex:`2`}}>
        <div role="document" style={{backgroundColor: `${props.bgcolor}`, color:`${props.color}`, height: `85vh`, overflowY: `scroll`, margin:`auto`, maxWidth:`60em`, padding:`.5em`, textAlign: `left`, width:`85%`, zIndex:`3`}}>
            <div>
                <h2  style={{textAlign: `center`}}>A KALEIDOCYCLE!</h2>
                <p>
                    This is a kaleidocycle! I love the way you can just fidget with this thing forever. And it’s a model of community engagement on top of that.
                </p>
                <p>
                    It’s a conversational tool that academic and community research partners could use in evaluative conversations about their work. It divides community engagement into a 4-phase cycle, with different prompts and questions in each one: planning, acting, watching, reacting.
                </p>
                <p>
                    Everyone around the table in this conversation would have their own kaleidocycle with these speaking prompts. This represents the fact that there isn’t just one singular objective view that can summarize public health work. It’s a social process, and understanding the varying, potentially conflicting viewpoints and priorities within it can lead to a more accurate understanding of its actual impact.
                </p>
                <p>
                    It’s meant to help pace a conversation between project partners. The conversation can’t move forward until everyone flips their paper to the next phase.
                </p>
                <p>
                    I’ve saved the exploration of the prompts for a different play. So for now, I’ll just say that these prompts are based on theories by Stuart Hall and Nancy Fraser. They highlight the way that different audiences can have different perspectives on the same communication program, as well as the need to surface and discuss conflicts rather than create a homogenous view of public good.
                </p>
            </div>
            <div style={{margin:`auto`, textAlign:`center`}}>
                <EndPlayButton playid={ props.playid } onClickFunction={ props.onClickEndButton }  />
            </div>
        </div>
    </article>


))

export default Play07