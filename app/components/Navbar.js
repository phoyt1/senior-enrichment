import React from 'react'
import {Link} from 'react-router';

const Navbar = function(){

  return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Margaret Hamilton Interplanetary Academy of JavaScript</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><Link to='/campuses'>Campuses <span className="sr-only">(current)</span></Link></li>
              <li><Link to='/students'>Students</Link></li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

// <li className="dropdown">
//                 <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
//                 <ul className="dropdown-menu">
//                   <li><a href="#">Action</a></li>
//                   <li><a href="#">Another action</a></li>
//                   <li><a href="#">Something else here</a></li>
//                   <li role="separator" className="divider"></li>
//                   <li><a href="#">Separated link</a></li>
//                   <li role="separator" className="divider"></li>
//                   <li><a href="#">One more separated link</a></li>
//                 </ul>
//               </li>

export default Navbar;
