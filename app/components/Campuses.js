import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

/* -----------------    COMPONENT     ------------------ */

export const Campuses = function(props){
  console.log(props)

  return (
    <div className="row">
      {
        props.campuses.campuses.map(campus=>(
        <div className="col-sm-6 col-md-4" key={ campus.id }>
            <div className="thumbnail">
              <Link to={`/campuses/${campus.id}`}>
                <img src={campus.image}/>
                <div className="caption">
                  <h3>{campus.name}</h3>
                </div>
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}


/* -----------------    CONTAINER     ------------------ */
function mapStateToProps(state, ownProps){
  return {
    campuses: state.campuses
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campuses)



