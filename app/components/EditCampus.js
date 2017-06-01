import React from 'react';
import {Link} from 'react-router';

const EditCampus = function(props){
  console.log('EDIT CAMPUS PROPS',props)
  return (
    <div className="well col-md-8">
    <h4>Edit Campus Form</h4>
    <br />
    <form onSubmit={props.onSubmit} className="form-inline table">
      <div className="form-group col-md-4">
        <label >Name</label>
        <input type="text" className="form-control" name="name" placeholder="New Campus" />
      </div>
      <div className="form-group col-md-5">
        <label >Image URL</label>
        <input className="form-control" name="image" placeholder="http://..." />
      </div>

        <button type="submit" className="btn btn-primary col-xs-2">Submit</button>

    </form>
    </div>
  )
}

export default EditCampus;
