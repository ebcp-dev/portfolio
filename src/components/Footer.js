import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p>
      <a href="mailto:ebcp.dev@gmail.com">ebcp.dev@gmail.com</a>
      <br />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/earl-perez/"
      >
        LinkedIn
      </a>{' '}
      |{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/ebcp-dev/"
      >
        GitHub
      </a>
    </p>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool
};

export default Footer;
