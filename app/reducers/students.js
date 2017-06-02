import axios from 'axios';


/* -----------------    ACTIONS     ------------------ */

const GET_STUDENT = 'GET_STUDENT';

/* ------------   ACTION CREATORS     ------------------ */

export const getStudent  = (student) => {
  return {type: GET_STUDENT, student} };

/* ------------       REDUCER     ------------------ */
const initialState = {
  //campuses:[],
  // currentStudents:[],
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

    default:
      newState = state;
  }

  return newState;
}



/* ------------       DISPATCHERS     ------------------ */

export const findSingleStudent = (id) => dispatch => {
  axios.get(`/api/student/${id}`)
       .then(foundStudent => {
         console.log(foundStudent)
         dispatch(getStudent(foundStudent.data))
        })
        .catch(err => console.error(err));
}
