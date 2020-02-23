import React from "react"

const playButton = props => (
	
	<button playid={ props.playid } onClick={ props.onClickFunction }>
		{ props.text }
	</button>

);

export default playButton;