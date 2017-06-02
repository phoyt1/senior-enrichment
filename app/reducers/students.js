import axios from 'axios';


/* -----------------    ACTIONS     ------------------ */
const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';
const NEW_STUDENT = 'NEW_STUDENT';

/* ------------   ACTION CREATORS     ------------------ */

export const getAllStudents  = (students) => {
  return {type: GET_ALL_STUDENTS, students} };

export const getStudent  = (student) => {
  return {type: GET_STUDENT, student} };

export const updateStudent  = (student, campusData) => {
  student.campus = campusData
  return {type: UPDATE_STUDENT, student} };

export const newStudent  = (student, campusData) => {
  student.campus = campusData
  return {type: NEW_STUDENT, student} };

export const removeStudent  = (studentId) => {
  return {type: REMOVE_STUDENT, studentId} };
/* ------------       REDUCER     ------------------ */
const initialState = {
  studentArr: [],
  selectedStudent: {
    campus: {
      image: '',
      name: ''
    },
    name: '',
    email: ''
  }
};
export default function reducer (state = initialState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) {

    case GET_ALL_STUDENTS:
      newState.studentArr = action.students
      break;

    case NEW_STUDENT:
      newState.studentArr = state.studentArr.concat(action.student)
      break;

    case GET_STUDENT:
      newState.selectedStudent = action.student
      break;

    case UPDATE_STUDENT:
      newState.selectedStudent = Object.assign(state.selectedStudent, action.student)
      break;

    case REMOVE_STUDENT:
      newState.studentArr =
      state.studentArr.filter(
        student => {return student.id !== action.studentId
      })
      break;

    default:
      newState = state;
  }

  return newState;
}



/* ------------       DISPATCHERS     ------------------ */

export const findSingleStudent = (id) => dispatch => {
  axios.get(`/api/student/${id}`)
       .then(foundStudent => {
         dispatch(getStudent(foundStudent.data))
        })
        .catch(err => console.error(err));
}

export const editCurrentStudent = (id, student) => dispatch => {
  axios.put(`/api/student/${id}`, student)
       .then(updatedStudent => {
         dispatch(updateStudent(updatedStudent.data, student.campus))
        })
        .catch(err => console.error(err));
}

export const deleteStudent = (id) => dispatch => {
  axios.delete(`/api/student/${id}`)
    .then(() => {
      dispatch(removeStudent(id))
    })
    .catch(err => console.error(err));
}

export const addNewStudent = (student) => dispatch => {
  axios.post(`/api/student`, student)
    .then((createdStudent) => {
      dispatch(newStudent(createdStudent.data, student.campus))
    })
    .catch(err => console.error(err));
}
