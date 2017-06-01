import axios from 'axios';


/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_CAMPUSES';
const UPDATE = 'UPDATE_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
const REMOVE_STDT_FRM_CAMPUS = 'REMOVE_STDT_FRM_CAMPUS';
const SELECT = 'SELECT_CAMPUS';

/* ------------   ACTION CREATORS     ------------------ */

export const getCampuses  = (campuses) => { return {type: INITIALIZE, campuses} };

export const updateCampus  = (campus) => {
  return {type: UPDATE, campus} };

export const removeCampus  = () => {
  var campus = {students: []}
  return {type: REMOVE_CAMPUS, campus } };

export const removeStudentFromCampus  = (studentId) => {
  return {type: REMOVE_STDT_FRM_CAMPUS, studentId } };

export const getSingleCampus  = (campus) => {
  return {type: SELECT, campus} };

/* ------------       REDUCER     ------------------ */
const initialState = {
  //campuses:[],
  // currentStudents:[],
  selectedCampus: {
    students: [],
    //editCampus: false
  }};
export default function reducer (state = initialState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) {

    case INITIALIZE:
      newState.campusesArr = action.campuses
      break;

    case SELECT:
      newState.selectedCampus = action.campus
      break;

    case REMOVE_CAMPUS:
      newState.selectedCampus = action.campus
      break;

    case REMOVE_STDT_FRM_CAMPUS:
      newState.selectedCampus.students =
      state.selectedCampus.students.filter(
        student => {return student.id !== action.studentId
      })
      break;

    case UPDATE:
      newState.selectedCampus = action.campus
      break;

    default:
      newState = state;
  }
  console.log('NEW STATE', newState);
  return newState;
}



/* ------------       DISPATCHERS     ------------------ */

export const findSingleCampuses = (id) => dispatch => {
  axios.get(`/api/campus/${id}`)
       .then(foundCampus => {
         dispatch(getSingleCampus(foundCampus.data))
        })
        .catch(err => console.error(err));
}

export const editCampus = (id, campus) => dispatch => {
  axios.put(`/api/campus/${id}`, campus)
       .then(foundCampus => {
         dispatch(updateCampus(foundCampus.data))
        })
        .catch(err => console.error(err));
}

export const deleteCampus = (id) => dispatch => {
  axios.delete(`/api/campus/${id}`)
       .then(deletedCampus => {
         dispatch(removeCampus(deletedCampus.data))
        })
        .catch(err => console.error(err));
}

export const deleteStudentFromCampus = (studentId) => dispatch => {
  console.log('HERE!!!',studentId)
  axios.delete(`/api/student/${studentId}`)
       .then(() => {
         dispatch(removeStudentFromCampus(studentId))
        })
        .catch(err => console.error(err));
}
