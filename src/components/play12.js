import React from "react"
import EndPlayButton from "./endPlayButton"


const Play12 = React.forwardRef((props, ref) => (

    <article role="dialog" style={{backgroundColor: `rgba(0, 0, 0, 0.66)`, display: `${props.displayStyle}`, height: `100vh`, padding:  `.25em`, position: `fixed`, left: `0`, top:`0`, width:`100vw`, zIndex:`2`}}>
        <div role="document" style={{backgroundColor: `${props.bgcolor}`, color:`${props.color}`, height: `85vh`, overflowY: `scroll`, margin:`auto`, maxWidth:`60em`, padding:`.5em`, textAlign: `left`, width:`85%`, zIndex:`3`}}>
            <div>
                <h2  style={{textAlign: `center`}}>The Future of All of Us</h2>
                <div style={{margin:`auto`, width:`75%`}}>
                    <div style={{overflow: `hidden`, paddingBottom: `56.25%`, position: `relative`, height: `0`}}>
                        <iframe title="NIH All of Us intro" style={{left:`0`, top:`0`, height:`100%`, width:`100%`, position: `absolute`}} width="560" height="315" src="https://www.youtube-nocookie.com/embed/ti50nS7B5vI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div style={{maxHeight: `10em`, overflowY: `scroll`}}>
                    <p>
                        In the year 2060, the National Institutes of Health (NIH) will have long moved past its original 10-year timeline for the All of Us precision medicine research program. Right now, the idea of research participants as partners is still forming. I’d like to think this mission will live on through an expanded scope of work. Federal research grants will include requirements around research training and professional development for people from medically underserved communities. Review boards will employ people who have experienced the health issues being researched. The NIH will mandate collaborative research with communities that have historically experienced health inequities. Translational research will be included in this scope. Such work will help operationalize the findings of biomedical research into community development plans, health interventions, and policy decisions. The NIH will require community benefits agreements and collaborative evaluation plans. Members of research institutions’ surrounding communities will be trained to document scientific research processes and use creative means to educate others about All of Us findings. Such community engagement will be evaluated in part by the kinds of connections formed and relationships maintained throughout the process. Unfortunately, there’s no reference to cite for this paragraph’s claims. It’s my own lofty vision for the world I want to live in when I’m 68 years old.
                    </p>
                </div>
            </div>
            <div style={{margin:`auto`, textAlign:`center`}}>
                <EndPlayButton playid={ props.playid } onClickFunction={ props.onClickEndButton }  />
            </div>
        </div>
    </article>


))

export default Play12