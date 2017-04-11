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
          <div className="col s6 m3">
            <div className="card">
              <div className="card-image port-img waves-effect waves-block waves-light">
                <img className="activator" src="images/9toShine-screenshot.png" />
              </div>

              <div className="card-reveal">
                <i className="card-title material-icons right">close</i>
                <p className="card-title reveal-title">Habit Formation App</p>
                <p className="reveal-text">This is a habit formation app developed as my final project at The Iron Yard. React.js with Materialize css, backend Parse server, and Pocket Oauth API</p>
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
                <p className="card-title reveal-title">Etsy Recreation</p>
                <p className="reveal-text">This is a recreation of the Etsy main page created in week 4 of The Iron Yard program.</p>
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
                <p className="reveal-text">This page is a pixel-perfect recreation of a design comp completed in the first week of The Iron Yard program.</p>
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
                <p className="center-align links"><a target="_blank" href="https://anniemiko.github.io/5.3-turn-based-game/">Play Game</a> | <a target="_blank" href="https://github.com/anniemiko/5.3-turn-based-game/">View Code</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row center">

        </div>
      </div>
    </BaseLayout>
    )
  }
}

module.exports = {
  PortfolioContainer
}
