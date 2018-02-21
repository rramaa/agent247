import React, {Component} from "react"
import {connect} from 'react-redux'
import Button from 'scripts/components/Button'

class InputOptions extends Component{
	constructor(props) {
		super(props)
		this.updateText = this.updateText.bind(this)
	}

	updateText(e) {
		this.props.dispatch({
			type:'UPDATE_OUTPUT',
			payload: e
		})
	}

	render(){
		return (
			<div>
				{this.props.inputOptions.map((iOpt, index)=>{
					return (<Button onClick={this.updateText} meta={iOpt.inputText} text={iOpt.displayText} key={index} />
				)})}
			</div>
		)
	}
}

const mapStateToProps = (store) => {
	return store;
}

export default connect(mapStateToProps)(InputOptions)