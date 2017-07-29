import React, { Component } from "react"

export default class Operation extends Component {
	render() {
		let { operation } = this.props
		return (
			<div className="opblock">
				<h1 className="heading">
					<span>{operation.name}</span>
					<br/>
					<small>{operation.description}</small>
				</h1>
			</div>
		)
	}
}