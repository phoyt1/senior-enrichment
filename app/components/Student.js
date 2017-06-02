import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import AddStudent from './AddStudent';
import { editCurrentStudent } from '../reducers/students';

/* -----------------    COMPONENT     ------------------ */
class Student extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editStudent: false
    }
    this.onEditStudentSubmit = this.onEditStudentSubmit.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
  }

  render (){
  const selectedStudent = this.props.students.selectedStudent;
  const campuses = this.props.campuses;
  return (
    <div>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <a href="#" className="thumbnail">
            <img src={selectedStudent.campus.image}  />
          </a>
        </div>
      </div>
      <h3>{selectedStudent.name} <span onClick={this.onEditClick} className="btn btn-primary btn-xs">  Edit</span></h3>
        {
          this.state.editStudent
            ? <AddStudent campuses={campuses} onSubmit={this.onEditStudentSubmit} />
            : null
        }
      <div className="list-group col-md-6 well">
        <label>Email: {selectedStudent.email}</label>
        <br />
        <label>Campus: <Link to={`/campuses/${selectedStudent.campusId}`}>{selectedStudent.campus.name}</Link></label>
      </div>
    </div>
  )}

  onEditClick() {
    let val;
    this.state.editStudent ? val = false : val = true
    this.setState({
      editStudent: val
    });
  }

  onEditStudentSubmit(event) {
      event.preventDefault();
      var selectedCampus = this.props.campuses.campusesArr.filter(campus =>{
        return campus.id === +event.target.campus.value
      })
      const updatedStudent = {
        name: event.target.name.value,
        email: event.target.email.value,
        campusId: +event.target.campus.value,
        campus: selectedCampus[0]
      };
      this.props.editStudent(this.props.students.selectedStudent.id, updatedStudent);
      event.target.name.value = '';
      event.target.email.value = '';
      this.setState({
        editStudent: false
    });
  }
}
/* -----------------    CONTAINER     ------------------ */
function mapStateToProps(state){
  return {
    students: state.students,
    campuses: state.campuses
  }
}

function mapDispatchToProps(dispatch){
  return {
    editStudent:(id, student) => {
      dispatch(editCurrentStudent(id, student))
    }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Student)

