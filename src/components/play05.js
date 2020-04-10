import React from "react"
import EndPlayButton from "./endPlayButton"


const Play05 = React.forwardRef((props, ref) => (

    <article role="dialog" style={{backgroundColor: `rgba(0, 0, 0, 0.66)`, display: `${props.displayStyle}`, height: `100vh`, padding:  `10px`, position: `fixed`, left: `0`, top:`0`, width:`100vw`, zIndex:`2`}}>
        <div role="document" style={{backgroundColor: `${props.bgcolor}`, color:`${props.color}`, height: `85vh`, overflowY: `scroll`, margin:`auto`, maxWidth:`60em`, textAlign: `left`, width:`85%`, zIndex:`3`}}>
            <div>
                <h2  style={{textAlign: `center`}}>A People's Guide to Precision Medicine</h2>
                <p>
                    As part of my thesis work, I curated a zine called <a href="https://hercommunication.pubpub.org/issue-1" rel="noopener noreferrer" target='_blank'>"A People's Guide to Precision Medicine"</a>. I like to describe it as a do-it-together version of a research journal.
                </p>
                <p>
                    I combined personal interviews, the outputs of design-based workshops with college students, and a few miscellaneous bits and pieces. The articles vary pretty widely. But they all speak to the impact that precision medicine and related technologies may have on health equity. I strove to get an array of underrepresented voices to give a fuller picture of this potential — for harm and for good — than I had seen in messaging from institutions like the National Institutes of Health.
                </p>
                <p>
                    And now I'd like to invite one of you to pick an article for me to walk through with you.
                </p>
            </div>
            <div style={{margin:`auto`, textAlign:`center`}}>
                <EndPlayButton playid={ props.playid } onClickFunction={ props.onClickEndButton }  />
            </div>
        </div>
    </article>


))

export default Play05