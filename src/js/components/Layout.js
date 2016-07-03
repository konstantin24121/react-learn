import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

import {Link} from "react-router"

export default class Layout extends React.Component {
	render(){
		return (
			<div class="Layout">
				<Header/>
				<div class="container">
					<Link to="archives"><button class="btn btn-info">Archives</button></Link>
					<Link to="settings" class="btn btn-info">Settings</Link>
					{this.props.children}
				</div>
				<Footer />
			</div>
		)
	}
}