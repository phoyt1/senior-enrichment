import React from 'react';
import {Link} from 'react-router';

const AddStudent = function(props){
  return (
    <div className="well col-md-10">
    <h4>Student Form</h4>
    <br />
    <form onSubmit={props.onSubmit} className="form-inline table">
      <div className="form-group col-md-3">
        <label >Name</label>
        <input type="text" className="form-control" name="name" />
      </div>
      <div className="form-group col-md-3">
        <label >Email</label>
        <input type="email" className="form-control" name="email" />
      </div>
      <div className="form-group col-xs-3">
      <label >Campus</label>
      <select name="campus" className="form-control">
        { props.campuses ?
          props.campuses.campusesArr.map((campus)=>{
            return <option value={campus.id} key={campus.id}>{campus.name}</option>
          })
          :
          null
        }
      </select>
      </div>
      <button type="submit" className="btn btn-primary col-xs-2">Submit</button>
    </form>
    </div>
  )
}

export default AddStudent;
