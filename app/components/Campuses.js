import React from 'react';
import {Link} from 'react-router';

const Campuses = function(){

  return (
    <div className="row">
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src="..." alt="..." />
          <div className="caption">
            <h3>Thumbnail label</h3>
            <p>...</p>
            <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
          </div>
        </div>
      </div>


      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <Link to={`/campuses/:id`}>
            <img src="http://p7cdn4static.sharpschool.com/UserFiles/Servers/Server_520989/Image/school.png" alt="..." />
            <div className="caption">
              <h3>Thumbnail label</h3>
              <p>TextTextTextTextTextTextTextTextTextTextText</p>
            </div>
          </Link>
        </div>
      </div>


      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src="..." alt="..." />
          <div className="caption">
            <h3>Thumbnail label</h3>
            <p>...</p>
            <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
//<Link to={`/campuses/${campus.id}`}>
export default Campuses;
