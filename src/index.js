import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, BrowserHistory, BrowserRouter as Router } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import App from './components/App'
import CategoryListing from './components/category-listing'
import CategoryDetail from './components/category-detail'
import MovieDetail from './components/movie-detail'

const routing = (
	<Router history={BrowserHistory}>
		<Route
			render={({ location }) => (
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/category" component={CategoryListing} />
				<Route path="/category-detail/:name" component={CategoryDetail} />
				<Route path="/movie-detail/:name" component={MovieDetail} />
				<Route component={App} />
			</Switch>
			)}
		/>
	</Router>
)
ReactDOM.render(routing, document.getElementById('app'))