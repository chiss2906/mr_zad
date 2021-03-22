import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Main from './pages/Main'
import Houses from './pages/Houses'
import {HOME, HOUSES} from './constants'
import './Root.css'

const Root = () => (
	<Router>
		<Switch>
			<Route path={HOUSES}>
				<Houses />
			</Route>
			<Route path={HOME}>
				<Main />
			</Route>
		</Switch>
	</Router>
)
export default Root
