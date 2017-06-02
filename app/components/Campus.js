import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import EditCampus from './EditCampus';
import AddStudentToCampus from './AddStudentToCampus';
import { editCampus, deleteCampus, deleteStudentFromCampus, addStudent } from '../reducers/campuses'
/* -----------------    COMPONENT     ------------------ */
class Campus extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editCampus: false,
      newStudent: false
    }
    this.onCampusSubmit = this.onCampusSubmit.bind(this);
    this.onStudentSubmit = this.onStudentSubmit.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
    this.onDeleteCampusClick = this.onDeleteCampusClick.bind(this);
    this.onDeleteStudentClick = this.onDeleteStudentClick.bind(this);
  }

  render(){
    const { selectedCampus } = this.props;
    var studentsFoundNotification =
      ((!selectedCampus.students.length)
        ? 'No students enrolled'
        : 'Current Students')

  return (
    <div>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <a href="#" className="thumbnail">
            <img src={selectedCampus.image} />
          </a>
        </div>
      </div>

      <h3>{selectedCampus.name}
        <span>      </span>
        <span onClick={this.onEditClick} className="btn btn-primary btn-xs">  Edit</span>
        <span>      </span>
        <span onClick={this.onDeleteCampusClick} className="btn btn-danger btn-xs">  Delete Campus</span>
      </h3>
      <div>
        {
          this.state.editCampus
            ? <EditCampus onSubmit={this.onCampusSubmit} />
            : null
        }{
          this.state.newStudent
            ? <AddStudentToCampus onSubmit={this.onStudentSubmit} />
            : null
        }
      </div>
      <br />
      <div className="list-group col-md-8 well">
        <span>
          <h4>{studentsFoundNotification}
          <button onClick={this.onAddClick} type="button" className="btn btn-primary btn-xs pull-right">Add Student</button>
          </h4>
        </span>
        {
          selectedCampus.students.map(student => {
            return (
              <span key={student.id} className="list-group-item">
              <Link  to={`/students/${student.id}`}>{student.name}</Link>
              <button onClick={this.onDeleteStudentClick(student.id)} type="button" className="btn btn-danger btn-xs pull-right">Delete</button>
              </span>
            )
          })
        }
      </div>
    </div>
  )}

  onDeleteCampusClick(){
    this.props.deleteCampus(this.props.selectedCampus.id);
    window.location = '/';
  }

  onDeleteStudentClick(id){
    return ()=>{
      this.props.deleteStudent(id)
    }
  }

  onCampusSubmit(event) {
      event.preventDefault();

      const editedCampus = {
        name: event.target.name.value,
        image: event.target.image.value,
      };
      this.props.updateCampus(this.props.selectedCampus.id, editedCampus);
      event.target.name.value = '';
      event.target.image.value = '';
      this.setState({
        editCampus: false
    });
  }

  onStudentSubmit(event) {
      event.preventDefault();

      const newStudent = {
        name: event.target.name.value,
        email: event.target.email.value,
        campusId: this.props.selectedCampus.id
      };

      this.props.addStudent(newStudent);
      event.target.name.value = '';
      event.target.email.value = '';
      this.setState({
        newStudent: false
    });
  }

  onAddClick() {
    let val;
    this.state.newStudent ? val = false : val = true
    this.setState({
      newStudent: val
    });
  }

  onEditClick() {
    let val;
    this.state.editCampus ? val = false : val = true
    this.setState({
      editCampus: val
    });
  }
}
/* -----------------    CONTAINER     ------------------ */
function mapStateToProps(state){
  console.log('STATE',state.campuses)
  return {
    selectedCampus: state.campuses.selectedCampus,
    students: state.campuses.selectedCampus.students
  }
}

function mapDispatchToProps(dispatch){
  return {
    updateCampus: (id, campus) => {
      dispatch(editCampus(id, campus))
    },
    deleteCampus:(id) => {
      dispatch(deleteCampus(id));
    },
    deleteStudent:(studentId, campusId) => {
      dispatch(deleteStudentFromCampus(studentId, campusId));
    },
    addStudent: (student) => {
      dispatch(addStudent(student))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campus)

