import React, {Component} from "react"
import {connect} from 'react-redux'

class Output extends Component{
	constructor(props) {
		super(props)
	}

	render(){
		return (
			<textarea value={this.props.outputText}>
			</textarea>
		)
	}
}

const mapStateToProps = (store) => {
	return store;
}

export default connect(mapStateToProps)(Output)