import React from 'react';
import * as TodoAction from '../../actions/TodoActions';

export default class Todo extends React.Component {

	constructor(props) {
		super(props);
	}

	removeItem(){
		TodoAction.deleteTodo(this.props.id);
	}

	completeItem(){
		TodoAction.completeTodo(this.props.id);
	}

	render() {
		
		const completeClass = this.props.complete ? 'alert-success' : 'alert-danger';
		return (
			<li class={'alert ' + completeClass} data-id={this.props.id}>
				{this.props.text}
				<i className="glyphicon glyphicon-ok-circle" onClick={this.completeItem.bind(this)}></i> <i className="glyphicon glyphicon-remove-circle" onClick={this.removeItem.bind(this)}></i></li>
		);
	}
}
