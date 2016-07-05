import React from 'react';
import Todo from './components/Todo';
import TodoStore from '../store/TodoStore';
import * as TodoAction from '../actions/TodoActions';

export default class Todos extends React.Component {

	constructor(props) {
		super(props);
		this.getTodos = this.getTodos.bind(this);
		this.state = {
			todos: TodoStore.getAll(),
			newTask: 'Test'
		};
	}

	componentWillMount() {
		TodoStore.on('change', this.getTodos);
	}

	componentWillUnmount() {
		TodoStore.removeListener("change", this.getTodos);
	}

	getTodos(){
		this.setState({
			todos: TodoStore.getAll()
		});
	}

	createTodo(){
		TodoAction.createTodo(this.state.newTask);
		this.setState({newTask: null});
	}

	newTask(e){
		let newTask = e.target.value;
		this.setState({newTask});
	}

	render() {
		const { todos } = this.state;

		const TodoComponents = todos.map((todo) => {
			return <Todo key={todo.id} {...todo} />;
		});

		return (
			<div>
				<div className="h1">Todo list</div>		
				<ul className='list-unstyled'>{TodoComponents}</ul>
				<div className="row">
					<div className="form-group col-xs-3">
						<input type="text" className="form-control" onChange={this.newTask.bind(this)}/>
						<button className="btn btn-info" onClick={this.createTodo.bind(this)}>Create</button>
					</div>
				</div>
			</div>
		);
	}
}
