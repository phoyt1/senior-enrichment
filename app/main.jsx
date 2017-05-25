'use strict'
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router';
import Home from './components/Home';
import Campus from './components/Campus';
import Campuses from './components/Campuses';
import Student from './components/Student';
import Students from './components/Students';
import AddStudent from './components/AddStudent';
import store from './store';
import axios from 'axios';
import { getCampuses } from './reducers/campuses';
//import { getAlbumById } from './reducers/campuses'

// import Root from './components/Root'

const onCampusesEnter = function () {
  axios.get('/api/campus')
    .then(campuses => {
      store.dispatch(getCampuses(campuses.data))
      console.log(campuses.data)
       //{type: 'INITIALIZE', campuses:campuses.data})
    })
}

render(
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={Home} >
      <Route path="/campuses" component={Campuses} onEnter={onCampusesEnter} />
      <Route path="/campuses/:id" component={Campus} />
      <Route path="/students" component={Students} >
        <Route path="addStudent" component={AddStudent} />
      </Route>
      <Route path="/students/:id" component={Student} />
      <IndexRedirect to="/campuses" />
    </Route>
  </Router>
  </Provider>,
  document.getElementById('main')
)


