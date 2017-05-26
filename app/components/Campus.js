import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

/* -----------------    COMPONENT     ------------------ */

const Campus = function(props){
  console.log('CAMPUS PROPS',props)
  return (
    <div>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <a href="#" className="thumbnail">
            <img src={props.selectedCampus.image} />
          </a>
        </div>
      </div>

      <h3>{props.selectedCampus.name} <span className="btn btn-primary btn-xs">  Edit</span></h3>
      <br />
        <div className="list-group col-md-10 well">
          <h4>Current Students (Click to edit)</h4>
          <Link to="/students/:id" className="list-group-item">Cras justo odio</Link>
          <Link to="/students/:id" className="list-group-item">Dapibus ac facilisis in</Link>
          <Link to="/students/:id" className="list-group-item">Morbi leo risus</Link>
          <Link to="/students/:id" className="list-group-item">Porta ac consectetur ac</Link>
          <Link to="/students/:id" className="list-group-item">Vestibulum at eros</Link>
        </div>
    </div>
  )
}
/* -----------------    CONTAINER     ------------------ */
function mapStateToProps(state, ownProps){
  console.log('STATE',state.campuses)
  return {
    selectedCampus: state.campuses.selectedCampus
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campus)

