import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

/* -----------------    COMPONENT     ------------------ */

const Student = function(props){
  const selectedStudent = props.selectedStudent;
  return (
    <div>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <a href="#" className="thumbnail">
            <img src={selectedStudent.campus.image}  />
          </a>
        </div>
      </div>

      <h3>{selectedStudent.name} <span className="btn btn-primary btn-xs">  Edit</span></h3>
      <div className="list-group col-md-6 well">
        <label>Email: {selectedStudent.email}</label>
        <br />
        <label>Campus: {selectedStudent.campus.name}</label>
      </div>
    </div>

  )
}
/* -----------------    CONTAINER     ------------------ */
function mapStateToProps(state){
  return {
    selectedStudent: state.students.selectedStudent
  }
}

function mapDispatchToProps(dispatch){
  return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Student)

