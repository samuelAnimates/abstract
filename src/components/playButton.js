import React from "react"

const Button = props => (
	
	<button buttonid={ props.buttonId } onClick={ props.onClickFunction }>
		{ props.text }
	</button>

);

export default Button;