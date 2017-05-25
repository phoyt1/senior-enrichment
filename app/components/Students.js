import React from 'react';
import {Link} from 'react-router';
import AddStudent from './AddStudent.js'

const Students = function(props){
  const handleStudentClick = props.handleClick;
  const handleAddStudentClick = props.handleAddStudentClick;
  const showAddStudent = props.showAddStudent || true;

  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <h3>All Students <span className="btn btn-primary btn-xs" onClick={handleAddStudentClick}>  Add Student</span></h3>
        </div>

      </div>
      <div>
        {
          showAddStudent ? <AddStudent /> : null
        }

      </div>
      <div className="col-md-10">
        <table className="table table-striped table-hover">
          <tbody>

            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Campus</th>
              <th></th>
            </tr>

            <tr onClick={handleStudentClick}>
              <td>1</td>
              <td>Bobby Tables</td>
              <td>Fullstack</td>
              <td><button type="button" className="btn btn-danger btn-xs">Delete</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Bobby Tables</td>
              <td>Fullstack</td>
              <td>X</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
//  <div className="list-group">
//         <Link to="/students/:id" className="list-group-item">Cras justo odio</Link>
//         <Link to="/students/:id" className="list-group-item">Dapibus ac facilisis in</Link>
//         <Link to="/students/:id" className="list-group-item">Morbi leo risus</Link>
//         <Link to="/students/:id" className="list-group-item">Porta ac consectetur ac</Link>
//         <Link to="/students/:id" className="list-group-item">Vestibulum at eros</Link>
//       </div>
export default Students;
