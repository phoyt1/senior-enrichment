import React from 'react';
import {Link} from 'react-router';

const AddStudent = function(props){
  // const handleClick = props.handleClick;
  return (
    <div className="well col-md-10">
    <h4>Add Student Form</h4>
    <br />
    <form className="form-inline table">
      <div className="form-group col-md-3">
        <label >Name</label>
        <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe" />
      </div>
      <div className="form-group col-md-3">
        <label >Email</label>
        <input type="email" className="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com" />
      </div>
      <div className="form-group col-xs-2">
      <label >Campus</label>
      <select className="form-control">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      </div>
      <button type="submit" className="btn btn-primary col-xs-2">Add Student</button>
    </form>
    </div>
  )
}

export default AddStudent;
