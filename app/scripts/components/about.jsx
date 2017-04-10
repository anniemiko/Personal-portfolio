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
              <img src="images/profile-pic.jpg" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p className="section">I am a budding front end developer with a passion for simple design and clean code. I am a recent graduate of The Iron Yard's front end engineering program, where I quickly became proficient in the basics of front end development - HTML, CSS and Javascript, along with relevant libraries and frameworks such as jQuery, SASS, Backbone, Handlebars, Bootstrap, React, and Materialize.</p>
                <p className="section">What drew me to coding was the necessity for lifelong learning and the opportunity to work with teams on big projects. I was specifically drawn to front end development as I love to design things that are both aesthetically pleasing and easily accessible. Looking for the silver lining comes naturally to me, and I believe a balance of patience, passion, and persistence are the keys to solving any problem.</p>
                <p className="section">I love people, animals, and the great outdoors. Some of my favorite hobbies are baking, sewing and painting. Though most likely, if I’m not coding up a storm, you’ll find me out hiking a trail.</p>
              </div>
              <div className="card-action">
                <a href="mailto:andrea.f.baty@gmail.com">Email me</a>
                <a href="tel:+1225-266-8455">Call me</a>
                <a href="https://www.linkedin.com/in/andreabaty/"><img className="social-links right" src="images/In-2C-66px-TM.png"/></a>
                <a href="https://github.com/anniemiko/"><img className="social-links right" src="images/GitHub-Mark-64px.png"/></a>
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
