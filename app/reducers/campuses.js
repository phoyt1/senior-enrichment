import axios from 'axios';


/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE_CAMPUSES';

/* ------------   ACTION CREATORS     ------------------ */

export const getCampuses  = (campuses) => { return {type: INITIALIZE, campuses} };

/* ------------       REDUCER     ------------------ */
const initialState = [];
export default function reducer (campuses = initialState, action) {
  switch (action.type) {

    case INITIALIZE:
      return action.campuses

    default:
      return campuses;
  }
}



/* ------------       DISPATCHERS     ------------------ */

// export const getCampuses = () => dispatch => {
//   console.log('HERE!!!')
//   axios.get('/api/campus')
//        .then(res => dispatch(initialize(res.data)));
// }
