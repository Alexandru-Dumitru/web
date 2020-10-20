import React from 'react';
import { Link } from 'react-router-dom';
import './footer.styles.scss';

const Footer = () => (
<div className="footer-container">
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <i className="fas fa-laptop-code"/>
              Alex Dumitru
            </Link>
          </div>
          <small className='website-rights'>Alex Dumitru © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/LinkedIn'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
            <Link
              className='social-icon-link'
              to='/GitHub'
              target='_blank'
              aria-label='GitHub'
            >
              <i className='fab fa-github' />
            </Link>
          </div>
        </div>
      </section>
    </div> 
)

export default Footer;