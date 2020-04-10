import React from "react"
import EndPlayButton from "./endPlayButton"


const Play11 = React.forwardRef((props, ref) => (

    <article role="dialog" style={{backgroundColor: `rgba(0, 0, 0, 0.66)`, display: `${props.displayStyle}`, height: `100vh`, padding:  `.25em`, position: `fixed`, left: `0`, top:`0`, width:`100vw`, zIndex:`2`}}>
        <div role="document" style={{backgroundColor: `${props.bgcolor}`, color:`${props.color}`, height: `85vh`, overflowY: `scroll`, margin:`auto`, maxWidth:`60em`, padding:`.5em`, textAlign: `left`, width:`85%`, zIndex:`3`}}>
            <div>
                <h2 style={{textAlign: `center`}}>An excerpt from a summer workshop</h2>
                <p>
                    [Excerpt from the <a href="https://hercommunication.pubpub.org/pub/precisionmedicinetldr" rel="noopener noreferrer" target='_blank'>#PMtldr workshop</a> (Section 4: Precision Medicine and Disease Prevention)]
                </p>
                <div style={{margin:`auto`, textAlign:`center`}}>
                <img style={{margin:`auto`, textAlign:`center`}} src="https://live.staticflickr.com/65535/49755212662_0c8ebdc3cb_c.jpg" alt="Cover illustration for #PMtldr workshop, depicting a too-long cat."/>
                </div>
                <p>
                    ...Precision medicine might help predict what kinds of people will get a disease in the first place. Again, what does “kinds of people” mean? It might mean a particular combo of genes, environment, and lifestyle. It’s hard to say right now.
                </p>
                <div style={{margin:`auto`, textAlign:`center`}}>
                    <img style={{margin:`auto`, textAlign:`center`}} src="https://live.staticflickr.com/65535/49755212687_9e4ed85f87_c.jpg" alt="An illustration showing parents, activities, and environment contributing to the cat we see today."/>
                </div>
                <p>
                    But these ideas about disease prediction aren’t new. We already use genetic and hereditary information to predict disease and make health decisions. For example, you might know of certain health conditions that run in your family. And tests for mutations in genes related to cancer have been available for decades. However, there’s still a lot we can’t predict. It’s possible we just don’t know all of the risk factors for certain diseases. Or, we don’t know about specific combinations of risk factors that lead to an actual disease. One of the promises of precision medicine is to help provide more information to make better predictions.
                </p>
                
                <p>
                    ...Ideally, precision medicine can help all people be healthier by providing better predictions about their health. They'll be able to talk with their health care providers about their risks. They’ll be able to make informed decisions about their lifestyle and their medical care. However, things probably won't be that simple for everyone.
                </p>
                <h3 style={{textAlign: `center`}}>Question Time.</h3>
                <p>
                We already know that diet and exercise are important to health. We already know that sleep and social support are important to health. <span style={{fontWeight:`700`}}>Do you think precision medicine can offer useful information for you to form healthy habits? Why or why not?</span>
                </p>
            </div>
            <div style={{margin:`auto`, textAlign:`center`}}>
                <EndPlayButton playid={ props.playid } onClickFunction={ props.onClickEndButton }  />
            </div>
        </div>
    </article>


))

export default Play11