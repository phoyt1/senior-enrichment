import axios from 'axios';


/* -----------------    ACTIONS     ------------------ */

const SELECT = 'SELECT_CAMPUS';

/* ------------   ACTION CREATORS     ------------------ */

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

    // case INITIALIZE:
    //   newState.campusesArr = action.campuses
    //   //newState.currentStudents = action.students
    //   break;

    case SELECT:
      newState.selectedCampus = action.campus
      // newState.selectedCampus.editCampus = false
      break;

    default:
      newState = state;
  }

  return newState;
}



/* ------------       DISPATCHERS     ------------------ */

export const deleteCampus = (id) => dispatch => {
  console.log('HERE!!!',id)
  axios.delete(`/api/campus/${id}`)
       .then(deletedCampus => {
         dispatch(removeCampus(deletedCampus.data))
        })
        .catch(err => console.error(err));
}
