import React from 'react';

import './blog.style.scss';
import underConstruction from '../../images/under-construction.gif';

const Blog = () => (
  <>
    {/* <div>I sometimes blog on Medium</div>
    <div>
      You can check my articles
      <a
        href="https://medium.com/@dumitru.alex0"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Medium"
        style={{ marginLeft: '5px' }}
      >
        here
      </a> 
    </div> */}
    <h1 className="under-construction">Under Construction</h1>
    <div className="under-construction">
      <img src={underConstruction} alt="Page under construction" />
    </div>
  </>
);

export default Blog;
