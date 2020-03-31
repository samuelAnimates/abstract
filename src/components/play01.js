import React from "react"
import EndPlayButton from "../components/endPlayButton"


const Play01 = React.forwardRef((props, ref) => (

    <article role="dialog" style={{backgroundColor: `rgba(0, 0, 0, 0.66)`, display: `${props.displayStyle}`, height: `100vh`, padding:  `.25em`, position: `fixed`, left: `0`, top:`0`, width:`100vw`, zIndex:`2`}}>
        <div role="document" style={{backgroundColor: `${props.bgcolor}`, color:`${props.color}`, height: `85vh`, overflowY: `scroll`, margin:`auto`, maxWidth:`60em`, padding:`.5em`, textAlign: `left`, width:`85%`, zIndex:`3`}}>
            <div>
                <h2 style={{textAlign: `center`}}>An honest check-in, more or less</h2>
                <p>
                    Look, I’m going to be honest with you all and say that this is a really weird time. There’s a global pandemic going on, I’m living with a slight, nagging underlying fear for my family and for the community I grew up in, and somehow I’m still writing papers and checking emails. I’m happy about the prospect of graduating this spring, a little scared about how much money I’ll have this summer, and excited about the opportunity to bring my humanities- and arts-informed lens to public health through a PhD starting in the fall. All the while, I know full well that I can’t predict what the next month will look like, much less the rest of the year.
                </p>
                <p>
                    So here it is. I feel like it’s impossible for me not to talk about the coronavirus right now. It’s bringing to light all of the systemic problems I’ve cared about for a long time. Look at income inequality, and the impact of having low-paid workers in grocery stores suddenly thrust into the same level of necessity and heroism as frontline health care workers. Look at existing health disparities and which communities are most at risk of dying due to unjust distributions of underlying health issues like diabetes, heart disease, and asthma. Think of which communities are exposed to more air pollution on a daily basis. Who is most likely not to be insured? Who won’t have access to federal financial assistance because of a lack of documents? Who can’t afford to social distance, and what business practices and lack of government oversight have been putting workers needlessly in harm’s way?
                </p>
                <p>
                    It’s also bringing to light issues that have been boiling under the surface of our public health system in the US for decades. Medical mistrust. Disinformation. Misinformation. Yet it’s also bringing to light generosity, resilience, and the terrifying beauty of the fact that even despite gross inequalities in this world, our fates are tied to each other. One day, the US response to this reality will be a case study in a text book. Maybe I’ll be even teaching my future students about it. And I doubt I’ll be able to talk about it without the visceral memory of bruising my shins against a shopping cart full of boxes of my personal belongings, in a slight drizzle, racing to the U-Haul on Main Street to lock my things away into storage before it closed.
                </p>
                <p>
                    But that’s a little too long of an answer to, “How are you,” so these days I usually just say, “Alright.”
                </p>
            </div>
            <div style={{margin:`auto`, textAlign:`center`}}>
                <EndPlayButton playid={ props.playid } onClickFunction={ props.onClickEndButton }  />
            </div>
        </div>
    </article>


))

export default Play01