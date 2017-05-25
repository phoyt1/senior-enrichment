import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

/* -----------------    COMPONENT     ------------------ */

export const Campuses = function(props){
  console.log(props)

  return (
    <div className="row">
      <p> This is a paragraph </p>
      {console.log('props',props.campuses[1])}
      {
        props.campuses.map(campus=>(
        <div className="col-sm-6 col-md-4" key={ campus.id }>
            <div className="thumbnail">
              <Link to='/campuses/:id'>
                <img src='http://p7cdn4static.sharpschool.com/UserFiles/Servers/Server_520989/Image/school.png' />
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



