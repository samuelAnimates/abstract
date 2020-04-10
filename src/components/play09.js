import React from "react"
import EndPlayButton from "./endPlayButton"


const Play09 = React.forwardRef((props, ref) => (

    <article role="dialog" style={{backgroundColor: `rgba(0, 0, 0, 0.66)`, display: `${props.displayStyle}`, height: `100vh`, padding:  `.25em`, position: `fixed`, left: `0`, top:`0`, width:`100vw`, zIndex:`2`}}>
        <div role="document" style={{backgroundColor: `${props.bgcolor}`, color:`${props.color}`, height: `85vh`, overflowY: `scroll`, margin:`auto`, maxWidth:`60em`, padding:`.5em`, textAlign: `left`, width:`85%`, zIndex:`3`}}>
            <div>
                <h2  style={{textAlign: `center`}}>HER Model of Community Engagement</h2>
                <p>
                    I wanted my thesis to explore big ideas, experiment in the real world, and come up with a tool I could use in the future.
                </p>
                <p>
                    One day, I want to influence the way community engagement and health communication is evaluated at the National Institutes of Health. But I need to learn how to crawl before I can learn how to run. So I decided to make the kinnd of tool that would be useful in a real project between academic and community partners.
                </p>
                <p>
                    So, I made the <a href="https://docs.google.com/presentation/d/e/2PACX-1vTfYodRjrwGL6SHgQRgzBzmLGYMvi-kFl5dFYBjr3py42KxfO70LnjOtwH134RYCRgfGhVXEEE2rB-9/pub?start=false&loop=false&delayms=3000" rel="noopener noreferrer" target='_blank'>Health Equity Rituals (HER)</a> model of community engagement. And now I'll walk you through it.
                </p>
            </div>
            <div style={{margin:`auto`, textAlign:`center`}}>
                <EndPlayButton playid={ props.playid } onClickFunction={ props.onClickEndButton }  />
            </div>
        </div>
    </article>


))

export default Play09