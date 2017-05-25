import React from 'react';
import {Link} from 'react-router';



const Student = function(props){
  const studentName = props.name;
  return (
    <div>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <a href="#" className="thumbnail">
            <img src="http://p7cdn4static.sharpschool.com/UserFiles/Servers/Server_520989/Image/school.png" alt="..." />
          </a>
        </div>
      </div>

      <h3>Student Name <span className="btn btn-primary btn-xs">  Edit</span></h3>
      <div className="list-group col-md-6 well">
        <label>Email:</label>
        <br />
        <label>Campus:</label>
      </div>
    </div>
  )
}

export default Student;
