import React, { Component } from "react"
import Operation from "./operation"

export default class Operations extends Component {
	render() {
		let { operations } = this.props
		
		if (operations && operations.length) {
			return (
				<div className="operations">
					{
						operations.map( op => {
							return <Operation operation={op} key={ op.name } />
						})
					}
				</div>
			)
		}

		return null
	}
}