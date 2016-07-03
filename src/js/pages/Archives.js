import React from "react";

export default class Archives extends React.Component {
	render(){
		return (
			<div>
				<h1>Archives</h1>
				<h2>{this.props.params.article}</h2>
			</div>
		)
	}
}