import React from "react";

export default class Article extends React.Component{
	static propTypes = {
		title: React.PropTypes.string.isRequired
	}
	render(){
		const {title} = this.props;
		
		return(
			<div className="col-md-4">
				<h3>{title}</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero doloremque, facere ad expedita id molestias consectetur magnam recusandae quaerat animi ut nisi eligendi adipisci voluptatum minima nihil cumque aliquid aspernatur.</p>
				<a href="#" className="btn btn-default">More about it</a>
			</div>
		);
	}
}