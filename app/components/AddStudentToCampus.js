import React from 'react';
import {Link} from 'react-router';

const AddStudent = function(props){
  // const handleClick = props.handleClick;
  return (
    <div className="well col-md-8">
    <h4>Add Student Form</h4>
    <br />
    <form onSubmit={props.onSubmit} className="form-inline table">
      <div className="form-group col-md-4">
        <label >Name</label>
        <input type="text" className="form-control" name="name" placeholder="Jane Doe" />
      </div>
      <div className="form-group col-md-5">
        <label >Email</label>
        <input type="email" className="form-control" name="email" placeholder="jane.doe@example.com" />
      </div>
      <button type="submit" className="btn btn-primary col-xs-2">Add Student</button>
    </form>
    </div>
  )
}

export default AddStudent;
