'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import {Router, Route, hashHistory, IndexRedirect} from 'react-router';
import Home from './components/Home'
import Campus from './components/Campus'
import Campuses from './components/Campuses'
import Student from './components/Student'
import Students from './components/Students'
import store from './store'
// import Root from './components/Root'

render(
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={Home} >
      <Route path="/campuses" component={Campuses} />
      <Route path="/campuses/:id" component={Campus} />
      <Route path="/students" component={Students} />
      <Route path="/students/:id" component={Student} />
      <IndexRedirect to="/campuses" />
    </Route>
  </Router>
  </Provider>,
  document.getElementById('main')
)
