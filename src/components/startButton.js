import React from "react"

const startButton = props => (
	
	<button buttonid={`startButton`} onClick={ props.onClickFunction }>
		Click to start the show!
	</button>

);

export default startButton;