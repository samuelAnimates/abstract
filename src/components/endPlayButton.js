import React from "react"

const endPlayButton = props => (
	
	<button style={{backgroundColor:`#AD0000`, color:`white`, padding: `1em`}} onClick={ props.onClickFunction }>
		Click to End This Play.
	</button>

);

export default endPlayButton;