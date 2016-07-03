import React from "react";
import Nav from "./Nav";

export default class Header extends React.Component {

	render(){
		const {location} = this.props;
		return (
			<header>
				<Nav location={location}/>
			</header>
			
		)
	}
}