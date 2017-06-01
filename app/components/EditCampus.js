import React from 'react';
import {Link} from 'react-router';

const EditCampus = function(props){
  // const handleClick = props.handleClick;
  return (
    <div className="well col-md-10">
    <h4>Edit Campus Form</h4>
    <br />
    <form className="form-inline table">
      <div className="form-group col-md-3">
        <label >Name</label>
        <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe" />
      </div>
      <div className="form-group col-md-4">
        <label >Image URL</label>
        <input type="email" className="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com" />
      </div>
      <button type="submit" className="btn btn-primary col-xs-2">Submit</button>
    </form>
    </div>
  )
}

export default EditCampus;
