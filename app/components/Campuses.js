import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import EditCampus from './EditCampus';
import { addCampus } from '../reducers/campuses';

/* -----------------    COMPONENT     ------------------ */

class Campuses extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      addCampus: false
    }
    this.onCampusSubmit = this.onCampusSubmit.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
  }
  render (){
  return (
    <div>
      <div className="col-sm-12">
        <button onClick={this.onAddClick} type="button" className="btn btn-primary btn-xs">Add Campus</button>
      </div>
      <div className="col-sm-12">
        {
          this.state.addCampus
            ? <EditCampus onSubmit={this.onCampusSubmit} />
            : null
        }

      </div>
    <div className="row">
      {
        this.props.campuses ?
        this.props.campuses.map(campus=>(
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
        :
        null
      }
    </div>
    </div>
  )}

  onAddClick() {
    let val;
    this.state.addCampus ? val = false : val = true
    this.setState({
      addCampus: val
    });
  }

  onCampusSubmit(event) {
      event.preventDefault();

      const newCampus = {
        name: event.target.name.value,
        image: event.target.image.value,
      };
      console.log('NEW CAMPUS', newCampus)
      this.props.addNewCampus(newCampus);
      event.target.name.value = '';
      event.target.image.value = '';
      this.setState({
        addCampus: false
    });
  }

}


/* -----------------    CONTAINER     ------------------ */
function mapStateToProps(state){
  return {
    campuses: state.campuses.campusesArr
  }
}

function mapDispatchToProps(dispatch){
  return {
    addNewCampus:(campus) => {
      dispatch(addCampus(campus))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campuses)



