import React from 'react';

import './projects.style.scss';
import underConstruction from '../../images/under-construction.gif';

const Projects = () => (
  <>
    <h1 className="under-construction">Under Construction</h1>
    <div className="under-construction">
      <img src={underConstruction} alt="Page under construction" />
    </div>
  </>
);

export default Projects;
