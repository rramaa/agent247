import React, {Component} from "react"
import autobind from 'react-auto-bind'
import cs from 'classnames'

class Button extends Component {
	constructor(props) {
		super(props)
		autobind(this)
	}
	onClick() {
		if(this.props.onClick) {
			this.props.onClick(this.props.data)
		}
	}
	render() {
		const cls = cs('button', this.props.className)
		return (
			<div 
				className={cls}
			  onClick={this.onClick}
			  disabled={this.props.disabled}
			  >
			{this.props.text}
			</div>
		)
	}
}

export default Button