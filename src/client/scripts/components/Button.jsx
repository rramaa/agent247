import React, {Component} from "react"

class Button extends Component{
	constructor(props) {
		super(props)
		this.onClick = this.onClick.bind(this)
	}

	onClick(e) {
		if(this.props.onClick) {
			this.props.onClick(this.props.meta)
		}
	}

	render(){
		return (
			<button
			  onClick={this.onClick}
			  disabled={this.props.disabled}
			  >
			{this.props.text}
			</button>
		)
	}
}

export default Button