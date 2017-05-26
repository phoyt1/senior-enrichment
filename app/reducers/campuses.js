import axios from 'axios';


/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_CAMPUSES';
const SELECT = 'SELECT_CAMPUS';

/* ------------   ACTION CREATORS     ------------------ */

export const getCampuses  = (campuses) => { return {type: INITIALIZE, campuses} };

export const getStudents  = (students) => {
  return {type: INITIALIZE, students} };

export const getSingleCampus  = (campus) => {
  return {type: SELECT, campus} };

/* ------------       REDUCER     ------------------ */
const initialState = {campuses:[], currentStudents:[], selectedCampus: {}};
export default function reducer (state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {

    case INITIALIZE:
      newState.campuses = action.campuses
      //newState.currentStudents = action.students
      break;

    case SELECT:
      newState.selectedCampus = action.campus
      break;

    default:
      return state;
  }
  console.log('NEW STATE',newState);
  return newState;
}



/* ------------       DISPATCHERS     ------------------ */

export const findSingleCampuses = (id) => dispatch => {
  console.log('HERE!!!',id)
  axios.get(`/api/campus/${id}`)
       .then(foundCampus => {
         dispatch(getSingleCampus(foundCampus.data))
        })
}

// export const findStudentsByCampus = (id) => dispatch => {
//   console.log('HERE!!!',id)
//   axios.get(`/api/campus/${id}`)
//        .then(foundCampus => {
//          dispatch(getSingleCampus(foundCampus.data))
//         })
// }
