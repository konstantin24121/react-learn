import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
	constructor() {
		super();
		this.todos = [{
			id: 6718010272731,
			text: 'paludism befleck',
			complete: false,
		}, {
			id: 11249812149198,
			text: 'springal ventilagin',
			complete: false,
		}, ];
	}

	getAll() {
		return this.todos;
	}

	createTodo(text) {
		const id = Date.now();
		this.todos.push({
			id,
			text,
			complete: false,
		});

		this.emit('change');
	}

	deleteTodo(id) {

		this.todos = this.todos.filter((todo) => {
			return todo.id !== id;
		});

		this.emit('change');
	}

	completeTodo(id) {

		let todo = this.todos.filter((todo) => {
			return todo.id === id;
		});

		todo[0].complete = true;

		this.emit('change');
	}

	handleActions(action) {
		switch (action.type) {
			case 'CREATE_TODO':{
				this.createTodo(action.text);
			} break;
			case 'DELETE_TODO':{
				this.deleteTodo(action.id);
			} break;
			case 'COMPLETE_TODO':{
				this.completeTodo(action.id);
			}
		}
	}
}

const todoStore = new TodoStore();

dispatcher.register(todoStore.handleActions.bind(todoStore));

window.dispatcher = dispatcher;
export default todoStore;
