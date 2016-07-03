import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

import {Link} from "react-router"

export default class Layout extends React.Component {
	render(){
		const {location} = this.props;
		return (
			<div class="Layout">
				<Header location={location}/>
				<div class="container">
					{this.props.children}
				</div>
				<Footer />
			</div>
		)
	}
}