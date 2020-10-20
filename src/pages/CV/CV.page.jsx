import React from 'react';

import './cv.style.scss';
import underConstruction from '../../images/under-construction.gif';

const CV = () => (
  <>
    <h1 className="under-construction">Under Construction</h1>
    <div className="under-construction">
      <img src={underConstruction} alt="Page under construction" />
    </div>
  </>
);

export default CV;
