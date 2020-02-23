import React, { Component } from "react"

class countdownClock extends Component {

	constructor(props) {
		super(props);
		this.state = {
			clockDisplayMinutes: props.totalTimeMinutes,
			clockDisplaySeconds: props.totalTimeSeconds
		}
	}

	componentDidMount() {
		this.countdownClockId = setInterval(
		  () => this.tickClock(),
		  1000
		);
	}
	componentWillUnmount() {
		clearInterval(this.countdownClockID);
	}

	tickClock() {
		let minutes = this.state.clockDisplayMinutes;
		let seconds = this.state.clockDisplaySeconds;
		if (seconds > 0){
			this.setState({
				clockDisplaySeconds: (seconds-1),
			});
		}
		else if (seconds===0 && minutes>0){
			this.setState({
				clockDisplayMinutes: (minutes-1),
				clockDisplaySeconds: 59
			});
		}
		else if (seconds===0 && minutes===0){
			return;
		}	
	}

	render() {
		return (
			<div style={{backgroundColor:`#AD0000`, color:`white`, padding: `1em`, position: `fixed`, left: `0`, bottom:`0`, textAlign:`center`, zIndex: `4`}}>
				<span>Countdown</span>
				<br/>
				{ (this.state.clockDisplayMinutes===0 && this.state.clockDisplaySeconds===0) &&
					<span>OVER</span>
				}
				{ (this.state.clockDisplayMinutes<=9 && 0<this.state.clockDisplaySeconds && this.state.clockDisplaySeconds<10) &&
					<span>0{this.state.clockDisplayMinutes}:0{this.state.clockDisplaySeconds}</span>
				}
				{ (this.state.clockDisplayMinutes<=9 && this.state.clockDisplaySeconds>9) &&  
					<span>0{this.state.clockDisplayMinutes}:{this.state.clockDisplaySeconds}</span>
				}
				{ (this.state.clockDisplayMinutes>9 && this.state.clockDisplaySeconds<=9) &&
					<span>{this.state.clockDisplayMinutes}:0{this.state.clockDisplaySeconds}</span>
				}
				{ (this.state.clockDisplayMinutes>9 && this.state.clockDisplaySeconds>9) && 
					<span>{this.state.clockDisplayMinutes}:{this.state.clockDisplaySeconds}</span>
				}				
			</div>
	)}

}

export default countdownClock;