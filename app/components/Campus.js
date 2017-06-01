import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

/* -----------------    COMPONENT     ------------------ */

const Campus = function(props){
  console.log('CAMPUS PROPS',props)
  return (
    <div>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <a href="#" className="thumbnail">
            <img src={props.selectedCampus.image} />
          </a>
        </div>
      </div>

      <h3>{props.selectedCampus.name} <span className="btn btn-primary btn-xs">  Edit</span></h3>
      <br />
        <div className="list-group col-md-10 well">
          <h4>Current Students (Click to edit)</h4>
          {
            props.selectedCampus.students ?
              props.selectedCampus.students.map(student => {
                return <Link key={student.id} to={`/students/${student.id}`} className="list-group-item">{student.name}</Link>
              })
              :
               <h4>No current students</h4>
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

