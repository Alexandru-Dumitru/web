import React from 'react';
import { Link } from 'react-router-dom';
import './footer.styles.scss';

const Footer = () => (
  <div className="footer-container">
    <section className="social-media">
      <div className="social-media-wrap">
        <div className="footer-logo">
          <Link to="/" className="social-logo">
            <i className="fas fa-laptop-code" />
            Alex Dumitru
          </Link>
        </div>
        <small className="website-rights">Alex Dumitru © 2020</small>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/alexandru-paul-dumitru"
            className="social-icon-link"
            to="/LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            href="https://github.com/dumitru-alex"
            className="social-icon-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://medium.com/@dumitru.alex0"
            className="social-icon-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
          >
            <i className="fab fa-medium" />
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Footer;
