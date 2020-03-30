import React, {Component} from 'react';
import "../styles/global.css"

class EndPlayButton extends Component {

	ref = React.createRef();

	componentDidMount(){
		this.ref.current.focus();
	}

	render() {
		return (

			<button ref={ this.ref } playid={ this.props.playid } style={{ padding: `1em` }} className={"endPlayButton"}  onClick={ this.props.onClickFunction } >
				Click to End This Play.
			</button>

		)
	}

};

export default EndPlayButton;