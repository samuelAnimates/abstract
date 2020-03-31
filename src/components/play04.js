import React from "react"
import EndPlayButton from "./endPlayButton"


const Play04 = React.forwardRef((props, ref) => (

    <article role="dialog" style={{backgroundColor: `rgba(0, 0, 0, 0.66)`, display: `${props.displayStyle}`, height: `100vh`, padding:  `.25em`, position: `fixed`, left: `0`, top:`0`, width:`100vw`, zIndex:`2`}}>
        <div role="document" style={{backgroundColor: `${props.bgcolor}`, color:`${props.color}`, height: `85vh`, overflowY: `scroll`, margin:`auto`, maxWidth:`60em`, padding:`.5em`, textAlign: `left`, width:`85%`, zIndex:`3`}}>
            <div>
                <h2 style={{textAlign: `center`}}>Ritual &amp; Transmission</h2>
                <p style={{textAlign: `center`}}>
                    Can I get three volunteers from the audience?<br/>
                    <span style={{fontSize: `2em`}}>A B C</span>
                </p>
                <p>
                    We have health expert A, medical professional B, and layperson C here to illustrate health communication. Health expert A, I’m going to send you a message. Your job is to get it to medical professional B. Medical professional B, your job is to get the message to layperson C. I am going to play the part of a health researcher by observing and analyzing this whole process.
                </p>
                <p style={{textAlign: `center`}}>
                    Great. Now, I’m going to examine this process through a transmission lens of communication:<br/>
                    <span style={{fontSize: `2em`}}>A <span aria-label="right arrow" role="img">➡️</span> B <span aria-label="right arrow" role="img">➡️</span> C</span>
                </p>
                <p>
                    That is to say, I’m going to focus on how well my message got from A to C. <span style={{fontSize: `.75em`}}>[Sam talks about the speed of the process, the accuracy of the message, and the performance of layperson C.]</span>
                </p>
                <p>
                    Following from these observations, my recommendations for improvement will focus on the message and how it is delivered. We could take a technological approach and switch to a VR-enabled communication system where things like body language We could take a health literacy approach and teach layperson C how to better understand the kind of messages that will come from medical professional B. We could take a cultural competency approach and train medical professional B how to tailor a message more specifically for people like layperson C. We could take a policy approach and have clearer guidelines and definitions coming straight from health expert A so there is little ambiguity for medical professional B.
                </p>
                <p>
                That was the transmission lens of communication. Now I’ll examine what just happened through a ritual lens of communication. That is to say, I’ll focus on the relationships and social structures that this process just created. I positioned myself at the outside expert, solely responsible for the outlining of goals and the metrics of success. I defined the process as starting with A, and moving in one direction to C, but maybe we’d all like the outcomes better if C had a chance to say what they’d like to be able to do, and worked with A and B to make it happen. I alone decided what message was worth communicating, without input from the people required to make it happen. What would it look like to repeat this with shared decision making power? I have a sense that the people involved trusted the process, but I have a hunch that was probably easier for A and B. I’m not sure how much layperson C’s actions reflected social pressures or actual enthusiasm for what I was trying to accomplish here. 
                </p>
                <p>
                In the real world, obviously, a health communication process isn’t quite this straightforward. But one really broad argument I make in my thesis is that there’s a lot to be gained from learning how to use a ritual lens of communication in public health. There’s a real opportunity for positive impact by building in more analysis, dialogue, and shared decision making around the roles that people get to play and the common interest at hand.
                </p>
            </div>
            <div style={{margin:`auto`, textAlign:`center`}}>
                <EndPlayButton playid={ props.playid } onClickFunction={ props.onClickEndButton }  />
            </div>
        </div>
    </article>


))

export default Play04