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
import { getCampuses, getStudents, findSingleCampuses } from './reducers/campuses';
import { findSingleStudent, getAllStudents } from './reducers/students';


const onCampusesEnter = function () {
  axios.get('/api/campus')
    .then(foundCampuses => {
      store.dispatch(getCampuses(foundCampuses.data));
    })
    .catch(err => {console.error(err)})
}

const onCampusEnter = function (nextRouterState) {
  const campusId = nextRouterState.params.id;
  store.dispatch(findSingleCampuses(campusId));
}

const onStudentsEnter = function(){
  axios.get('/api/student')
    .then(foundStudents => {
      store.dispatch(getAllStudents(foundStudents.data));
    })
    .catch(err => {console.error(err)})
}

const onStudentEnter = function(nextRouterState) {
  const studentId = nextRouterState.params.id;
  store.dispatch(findSingleStudent(studentId));
}

render(
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={Home} onEnter={onCampusesEnter}>
      <Route path="/campuses" component={Campuses} onEnter={onCampusesEnter}/>
      <Route path="/campuses/:id" component={Campus} onEnter={onCampusEnter}/>
      <Route path="/students" component={Students} onEnter={onStudentsEnter}/>
      <Route path="/students/:id" component={Student} onEnter={onStudentEnter} />
      <IndexRedirect to="/campuses" />
    </Route>
  </Router>
  </Provider>,
  document.getElementById('main')
)


