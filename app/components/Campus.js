import React from 'react';
import {Link} from 'react-router';



const Campus = function(){
  return (
    <div>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <a href="#" className="thumbnail">
            <img src="http://p7cdn4static.sharpschool.com/UserFiles/Servers/Server_520989/Image/school.png" alt="..." />
          </a>
        </div>
      </div>

      <h3>Single Campus <span className="btn btn-primary btn-xs">  Edit</span></h3>
      <br />
        <div className="list-group col-md-10 well">
          <h4>Current Students </h4>
          <Link to="/students/:id" className="list-group-item">Cras justo odio</Link>
          <Link to="/students/:id" className="list-group-item">Dapibus ac facilisis in</Link>
          <Link to="/students/:id" className="list-group-item">Morbi leo risus</Link>
          <Link to="/students/:id" className="list-group-item">Porta ac consectetur ac</Link>
          <Link to="/students/:id" className="list-group-item">Vestibulum at eros</Link>
        </div>
    </div>
  )
}

export default Campus;
