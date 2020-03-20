import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p>
      Earl Perez
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
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
