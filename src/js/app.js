import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from './components/Layout';

import Main from './pages/Main';
import Archives from './pages/Archives';
import Settings from './pages/Settings';

const app = document.getElementById('app');

ReactDOM.render(
	<Router hostory={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute components={Main}></IndexRoute>
			<Route path="archives/:article" component={Archives}></Route>
			<Route path="settings" component={Settings}></Route>
		</Route>
	</Router>
, app)