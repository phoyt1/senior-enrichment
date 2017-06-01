import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import EditCampus from './EditCampus';

/* -----------------    COMPONENT     ------------------ */

const Campus = function(props){
  console.log('CAMPUS PROPS',props)
  var studentsFoundNotification =
    ((!props.selectedCampus.students.length)
      ? 'No students enrolled'
      : 'Current Students')

  return (
    <div>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <a href="#" className="thumbnail">
            <img src={props.selectedCampus.image} />
          </a>
        </div>
      </div>

      <h3>{props.selectedCampus.name}
        <Link to='/'>
          <span className="btn btn-primary btn-xs">  Edit</span>
        </Link>
        <span>      </span>
        <Link to='/'>
          <span className="btn btn-danger btn-xs">  Delete Campus</span>
        </Link>
      </h3>
      <div>

          <EditCampus />


      </div>
      <br />
        <div className="list-group col-md-8 well">
          <span>
            <h4>{studentsFoundNotification}
            <Link to='/'>
            <button type="button" className="btn btn-primary btn-xs pull-right">Add Student</button>
            </Link>
            </h4>
          </span>
          {
            props.selectedCampus.students.map(student => {
              return (
                <span key={student.id} className="list-group-item">
                <Link  to={`/students/${student.id}`}>{student.name}</Link>
                  <Link to='/'>
                    <button type="button" className="btn btn-danger btn-xs pull-right">Delete</button>
                  </Link>

                </span>
              )
            })
          }
        </div>
    </div>
  )
}
/* -----------------    CONTAINER     ------------------ */
function mapStateToProps(state, ownProps){
  console.log('STATE',state.campuses)
  return {
    selectedCampus: state.campuses.selectedCampus
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campus)

