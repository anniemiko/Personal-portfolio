var React = require('react');
var $ = window.jQuery = require('jquery');
var Backbone = require('backbone');
var Materialize = require('materialize-css');
require('../../../node_modules/materialize-css/js/cards.js');

var BaseLayout = require('./base.jsx').BaseLayout;

class PortfolioContainer extends React.Component {
render(){
  return(
    <BaseLayout>
      <div className="">
        <h2 className="header white-text center">Portfolio</h2>
        <div className="row center">
          <h4 className="sub-heading center">Web Applications</h4>
          <div className="col s6 m3">
            <div className="card">
              <div className="card-image port-img waves-effect waves-block waves-light">
                <img className="activator" src="images/9toShine-screenshot.png" />
              </div>

              <div className="card-reveal">
                <i className="card-title material-icons right">close</i>
                <p className="card-title reveal-title">Habit Formation App</p>
                <p className="reveal-text">This is a habit formation app developed as my final project at The Iron Yard.</p>
                <p className="reveal-text">Developed with React.js, Materializecss, using a backend Parse server, and OAuth API for Pocket</p>
                <p className="center-align links"><a target="_blank" href="https://anniemiko.github.io/Final-Project/">Open App</a> | <a target="_blank" href="https://github.com/anniemiko/Final-Project">View Code</a></p>
              </div>
            </div>
          </div>
          <div className="col s6 m3">
            <div className="card">
              <div className="card-image port-img waves-effect waves-block waves-light">
                <img className="activator" src="images/Etsy-recreation-screenshot.png" />
              </div>
              <div className="card-reveal">
                <i className="card-title material-icons right">close</i>
                <p className="card-title reveal-title">Etsy Re-creation</p>
                <p className="reveal-text">This is a recreation of the Etsy main page created in week 4 of The Iron Yard program.</p>
                <p className="reveal-text">Developed using HTML5 and CSS3 with some JavaScript.</p>
                <p className="center-align links"><a target="_blank" href="https://anniemiko.github.io/4.2-Etsy-recreation/">Open Page</a> | <a target="_blank" href="https://github.com/anniemiko/4.2-Etsy-recreation/">View Code</a></p>
              </div>
            </div>
          </div>
          <div className="col s6 m3">
            <div className="card">
              <div className="card-image port-img waves-effect waves-block waves-light">
                <img className="activator" src="images/pixel-perfect-screenshot.png" />
              </div>
              <div className="card-reveal">
                <i className="card-title material-icons right">close</i>
                <p className="card-title reveal-title">Pixel Perfect</p>
                <p className="reveal-text">This page is a pixel-perfect re-creation of a design comp completed in the first week of The Iron Yard program.</p>
                <p className="reveal-text">Developed with HTML5 and CSS3.</p>
                <p className="center-align links"><a target="_blank" href="https://anniemiko.github.io/1.4-pixel-perfect/">Open Page</a> | <a target="_blank" href="https://github.com/anniemiko/1.4-pixel-perfect/">View Code</a></p>
              </div>
            </div>
          </div>
          <div className="col s6 m3">
            <div className="card">
              <div className="card-image port-img waves-effect waves-block waves-light">
                <img className="activator" src="images/turn-based-game-screenshot.png" />
              </div>
              <div className="card-reveal">
                <i className="card-title material-icons right">close</i>
                <p className="card-title reveal-title">Turn-based Game</p>
                <p className="reveal-text">This fun game was developed with a partner as part of the Iron Yard program.</p>
                <p className="reveal-text">Developed using JavaScript, JQuery, Bootstrap, Underscore, Handlebars, HTML and CSS.</p>
                <p className="center-align links"><a target="_blank" href="https://anniemiko.github.io/5.3-turn-based-game/">Play Game</a> | <a target="_blank" href="https://github.com/anniemiko/5.3-turn-based-game/">View Code</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row center">
          <h4 className="sub-heading center">Graphic Design</h4>
          <div className="col s6 m3">
            <div className="card">
              <div className="card-image port-img waves-effect waves-block waves-light">
                <img className="activator" src="images/Metro-EDNY-Vote-poster.jpg" />
              </div>

              <div className="card-reveal">
                <i className="card-title material-icons right">close</i>
                <p className="card-title reveal-title">Earth Day New York Poster</p>
                <p className="reveal-text">This poster was designed for display in local New York businesses as part of the MetroNY Best of Green Business campaign.</p>
                <p className="reveal-text">Designed using Adobe Illustrator and Photoshop.</p>
                <p className="center-align links"><a target="_blank" href="images/Metro-EDNY-Vote-posterV2.pdf">View Poster</a></p>
              </div>
            </div>
          </div>
          <div className="col s6 m3">
            <div className="card">
              <div className="card-image port-img waves-effect waves-block waves-light">
                <img className="activator" src="images/DVMag_April2016_Final.jpg" />
              </div>
              <div className="card-reveal">
                <i className="card-title material-icons right">close</i>
                <p className="card-title reveal-title">Magazine Ad</p>
                <p className="reveal-text">This print ad was created for ProAm camera cranes to run in the April Issue of Digital Video Magazine.</p>
                <p className="reveal-text">Designed using Adobe Illustrator and Photoshop.</p>
                <p className="center-align links"><a target="_blank" href="images/DVMag_April2016_Final.pdf">View Ad</a></p>
              </div>
            </div>
          </div>
          <div className="col s6 m3">
            <div className="card">
              <div className="card-image port-img waves-effect waves-block waves-light">
                <img className="activator" src="images/PA_MKE_program2016.jpg" />
              </div>
              <div className="card-reveal">
                <i className="card-title material-icons right">close</i>
                <p className="card-title reveal-title">Bi-fold Graduation Program</p>
                <p className="reveal-text">This is the cover of a program designed for the 2016 graduation of Milwaukee Public Allies.</p>
                <p className="reveal-text">Designed using Adobe Illustrator.</p>
                <p className="center-align links"><a target="_blank" href="images/PA_MKE_program2016.pdf">View Image</a></p>
              </div>
            </div>
          </div>
          <div className="col s6 m3">
            <div className="card">
              <div className="card-image port-img waves-effect waves-block waves-light">
                <img className="activator" src="images/AndreaBatyResume2017.jpg" />
              </div>
              <div className="card-reveal">
                <i className="card-title material-icons right">close</i>
                <p className="card-title reveal-title">Resume</p>
                <p className="reveal-text">With a background in design, of course I had to design my own resume!</p>
                <p className="center-align links"><a target="_blank" href="images/AndreaBatyResume2017.pdf">View Resume</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
    )
  }
}

module.exports = {
  PortfolioContainer
}
