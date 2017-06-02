import React from 'react';
import {Link} from 'react-router';
import AddStudent from './AddStudent.js';
import { connect } from 'react-redux';
import { deleteStudent, addNewStudent } from '../reducers/students';

class Students extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      addStudent: false
    }
    this.onAddStudentSubmit = this.onAddStudentSubmit.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
    this.onDeleteStudentClick = this.onDeleteStudentClick.bind(this);
  }

  render (){
    var students = this.props.students.studentArr
    var campuses = this.props.campuses
  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <h3>All Students <span className="btn btn-primary btn-xs" onClick={this.onAddClick}>  Add Student</span></h3>
        </div>

      </div>
      <div>
        {
          this.state.addStudent ? <AddStudent campuses={campuses} onSubmit={this.onAddStudentSubmit}/> : null
        }

      </div>
      <div className="col-md-10">
        <table className="table table-striped">
          <tbody>

            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Campus</th>
              <th></th>
            </tr>
            {
              students.map(student => {
               return (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td><Link to={`/students/${student.id}`}>{student.name}</Link></td>
                  <td><Link to={`/campuses/${student.campusId}`}>{student.campus.name}</Link></td>
                  <td><button onClick={this.onDeleteStudentClick(student.id)} type="button" className="btn btn-danger btn-xs">Delete</button></td>
                </tr>
               )
              })
            }


          </tbody>
        </table>
      </div>
    </div>
  )}

  onAddClick() {
    let val;
    this.state.addStudent ? val = false : val = true
    this.setState({
      addStudent: val
    });
  }
  onDeleteStudentClick(id) {
    return ()=>{
      this.props.deleteStudent(id)
    }
  }

  onAddStudentSubmit(event) {
    event.preventDefault();
    var selectedCampus = this.props.campuses.campusesArr.filter(campus =>{
      return campus.id === +event.target.campus.value
    })
    const newStudent = {
      name: event.target.name.value,
      email: event.target.email.value,
      campusId: +event.target.campus.value,
      campus: selectedCampus[0]
    };
    this.props.newStudent(newStudent);
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
    deleteStudent:(id)=>{
      dispatch(deleteStudent(id));
    },
    newStudent: (student) =>{
      dispatch(addNewStudent(student))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students)
