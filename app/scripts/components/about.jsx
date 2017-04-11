var React = require('react');
var Backbone = require('backbone');
var Materialize = require('materialize-css');

var BaseLayout = require('./base.jsx').BaseLayout;

class AboutContainer extends React.Component {
render(){
  return(
    <BaseLayout>
      <div className="container">
        <div className="col s12 m7">
          <h2 className="header white-text">About Me</h2>
          <div className="card horizontal">
            <div className="card-image">
              <img src="images/profile-pic_3.jpg" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p className="section">I am a budding front end developer with a passion for simple design and clean code. I am a recent graduate of The Iron Yard's front end engineering program, where I quickly became proficient in the basics of front end development - HTML, CSS and Javascript, along with relevant libraries and frameworks such as jQuery, SASS, Backbone, Handlebars, Bootstrap, React, and Materialize.</p>
                <p className="section">What drew me to coding was the necessity for lifelong learning and the opportunity to work with teams on big projects. I was specifically drawn to front end development as I love to design things that are both aesthetically pleasing and easily accessible. Looking for the silver lining comes naturally to me, and I believe a balance of patience, passion, and persistence are the keys to solving any problem.</p>
                <p className="section">I love people, animals, and the great outdoors. My passion for making the world a more sustainable place for all is what drives me. I've worked on various issues over the years, including social justice, animal welfare, and climate change. I'm excited to use my new coding skills to continue working on these important issues.</p>
              </div>
              <div className="card-action">
                <span className="email">EMAIL ME: </span><a id="email-add" href="mailto:andrea.f.baty@gmail.com">andrea.f.baty@gmail.com</a>

                <a target="_blank" href="https://www.linkedin.com/in/andreabaty/"><img className="social-links right" src="images/In-2C-66px-TM.png"/></a>
                <a target="_blank" href="https://github.com/anniemiko/"><img className="social-links right" src="images/GitHub-Mark-64px.png"/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m7">
          <div className="row center">

          </div>
        </div>
      </div>
    </BaseLayout>
    )
  }
}

module.exports = {
  AboutContainer
}
