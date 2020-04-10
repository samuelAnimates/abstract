import React from "react"
import EndPlayButton from "../components/endPlayButton"


const Play01 = React.forwardRef((props, ref) => (

    <article role="dialog" style={{backgroundColor: `rgba(0, 0, 0, 0.66)`, display: `${props.displayStyle}`, height: `100vh`, padding:  `.25em`, position: `fixed`, left: `0`, top:`0`, width:`100vw`, zIndex:`2`}}>
        <div role="document" style={{backgroundColor: `${props.bgcolor}`, color:`${props.color}`, height: `85vh`, overflowY: `scroll`, margin:`auto`, maxWidth:`60em`, padding:`.5em`, textAlign: `left`, width:`85%`, zIndex:`3`}}>
            <div>
                <h2 style={{textAlign: `center`}}>An honest check-in, more or less</h2>
                <p>
                    This is a really weird time. There’s a pandemic going on. I’m living with a nagging underlying fear for my family and for the community I grew up in. Yet somehow I’m still working on my thesis and pouring hours upon hours upon hours into perfecting my virtual island in Animal Crossing. I’m happy about the prospect of graduating this spring and excited about starting a PhD program in public health in the fall.
                </p>
                <p>
                    I feel the need to be in public health now more than ever. The coronavirus is shining a heartbreaking light on systemic issues. The burden of infection and death that black communities across the country are bearing right now is the result of generations of injustice. The danger that uninsured and food-insecure communities are facing right now is an escalation of risks they have long been forced to take. I see the harsh reality of the state of health disparities in the US.
                </p>
                <p>
                    Yet I also see generosity, resilience, and advocacy that point to the path forward. One day, the state of the US in 2020 will be a case study on the public health impacts of social inequalities. One day I might even teach my future students about it. Even then I doubt I’ll be able to talk about it without the visceral memory of bruising my shins against a shopping cart full of boxes, in a drizzle, racing to the U-Haul on Main Street to lock my things away into storage before it closed.
                </p>
                <p>
                    But that’s a little too long of an answer for, “How are you,” so these days I usually just say, “Good,” and I think people get it.
                </p>
            </div>
            <div style={{margin:`auto`, textAlign:`center`}}>
                <EndPlayButton playid={ props.playid } onClickFunction={ props.onClickEndButton }  />
            </div>
        </div>
    </article>


))

export default Play01