import React from "react"
import EndPlayButton from "./endPlayButton"


const Play03 = React.forwardRef((props, ref) => (

    <article role="dialog" style={{backgroundColor: `rgba(0, 0, 0, 0.66)`, display: `${props.displayStyle}`, height: `100vh`, padding:  `.25em`, position: `fixed`, left: `0`, top:`0`, width:`100vw`, zIndex:`2`}}>
        <div role="document" style={{backgroundColor: `${props.bgcolor}`, color:`${props.color}`, height: `85vh`, overflowY: `scroll`, margin:`auto`, maxWidth:`60em`, padding:`.5em`, textAlign: `left`, width:`85%`, zIndex:`3`}}>
            <div>
                <h2 style={{textAlign: `center`}}>A Moment of Apppreciation for Barbara Israel</h2>
                <p>
                    The idea of changing the social structures of research isn’t new. There are many participatory research frameworks that do just that. One recognized framework in public health is community-based participatory research (CBPR). CBPR centers long-term partnership with the community being studied, from framing research questions to analyzing and sharing results. One key CBPR scholar in public health is Barbara Israel at the University of Michigan. I draw on her work a lot when I think about what a ritual view of communication can bring to public health.
                </p>
                <p>
                    One key characteristic of academic-community research partnerships is that they require a lot of work that often falls outside of academic job titles and project evaluation metrics. This is especially true when working with underserved communities. At a large scale, I worry that this creates incentives to not work with medically underserved communities or to take a top-down approach, working with community members as consultants.
                </p>
                <p>
                    I think incorporating a ritual view of communication into project planning and evaluation within the National Institutes of Health can bring a more comprehensive view of CBPR and non-participatory research alike. Long-term, I think this can better promote participatory research methods and advancing health equity by recognizing the importance of research that intervenes in typical social structures. I look at researchers like Barbara Israel to find inspiration for these lofty goals. So, I’d like to share a small glimpse of that right now:
                </p>
                <p style={{textAlign: `center`}}>
                    <a href="http://www.detroiturc.org/neighbors-working-in-partnership-nwp.html" rel="noopener noreferrer" target='_blank'>Neighbors Working in Partnership</a>
                </p>
            </div>
            <div style={{margin:`auto`, textAlign:`center`}}>
                <EndPlayButton playid={ props.playid } onClickFunction={ props.onClickEndButton }  />
            </div>
        </div>
    </article>


))

export default Play03