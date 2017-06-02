import axios from 'axios';


/* -----------------    ACTIONS     ------------------ */

const GET_STUDENT = 'GET_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';

/* ------------   ACTION CREATORS     ------------------ */

export const getStudent  = (student) => {
  return {type: GET_STUDENT, student} };

export const updateStudent  = (student, campusData) => {
  student.campus = campusData
  return {type: UPDATE_STUDENT, student} };
/* ------------       REDUCER     ------------------ */
const initialState = {
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

    // case INITIALIZE:
    //   newState.campusesArr = action.campuses
    //   //newState.currentStudents = action.students
    //   break;

    case GET_STUDENT:
      newState.selectedStudent = action.student
      break;

    case UPDATE_STUDENT:
      newState.selectedStudent = Object.assign(state.selectedStudent, action.student)
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
