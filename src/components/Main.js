import PropTypes from 'prop-types';
import React from 'react';
import resumerss from '../images/resumer-ss.png';
import forumdss from '../images/forumd-ss.png';
import resume from '../images/Resume.jpg';

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      ></div>
    );

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://resumer.xyz/"
            >
              Resumer (2020)
            </a>
          </h3>
          <p>
            Made with Node.js/Express, React, Redux, PostgreSQL, Mocha, Chai,
            Travis CI, AWS
          </p>
          <span className="image main">
            <img src={resumerss} alt="Resumer screenshot" />
          </span>
          <p>
            Resumer is a web app where users can register accounts and organize
            their job applications through an interactive data table made with
            ag-Grid. The backend is a REST API written with Express and
            connected to a PostgreSQL instance hosted on Amazon RDS.
            Authentication is handled by Passport.js using JWT. The API is
            tested with Mocha and Chai and is integrated with Travis CI. The
            frontend is made with React, Redux and Axios for making HTTP
            requests to the API.
          </p>
          <hr />
          <h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://theforumd.herokuapp.com/"
            >
              Forumd (2018)
            </a>
          </h3>
          <p>Made with Node.js/Express, React, MongoDB, Heroku</p>
          <span className="image main">
            <img src={forumdss} alt="Forumd screenshot" />
          </span>
          <p>
            FORUM'd is an online forum where users can register for accounts,
            submit either link posts or text posts, and comment on posts.
            Node.js/Express is used in the backend REST API. User and Post data
            are stored in a MongoDB database hosted on mLab. React and
            MDBootstrap are used to create the UI. Passport.js and Bcrypt handle
            user authentication and password hashing.
          </p>
          {close}
        </article>

        <article
          id="resume"
          className={`${this.props.article === 'resume' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Resume</h2>
          <a target="_blank" href="./Resume.pdf">
            Download
          </a>
          <span className="image main">
            <img src={resume} alt="Resume image" />
          </span>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <ul className="icons">
            <li>
              <a
                target="_blank"
                href="https://github.com/ebcp-dev/"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/earl-perez/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="mailto:ebcp.dev@gmail.com" className="icon fa-envelope">
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired
};

export default Main;
