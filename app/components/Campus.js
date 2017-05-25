import React from 'react';
import {Link} from 'react-router';

const Campus = function(){
  return (
    <div>
      <h3>Single Campus <span className="label label-default">New</span></h3>
      <div className="list-group">
        <button type="button" className="list-group-item">Cras justo odio</button>
        <button type="button" className="list-group-item">Dapibus ac facilisis in</button>
        <button type="button" className="list-group-item">Morbi leo risus</button>
        <button type="button" className="list-group-item">Porta ac consectetur ac</button>
        <button type="button" className="list-group-item">Vestibulum at eros</button>
      </div>
    </div>
  )
}

export default Campus;
