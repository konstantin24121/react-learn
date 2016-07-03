import React from "react";
import Article from "./components/Article";

export default class Archives extends React.Component {
	render(){
		const Articles = [
			'Some title'
		].map((title, i)=> <Article key={i}  title={title} />);

		return (
			<div>
				<h1>Archives</h1>
				<h2>{this.props.params.article}</h2>
				<div className="row">{Articles}</div>
			</div>
		)
	}
}