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
        <h2 className="header white-text center">PORTFOLIO</h2>
        <div className="row center">
          <div className="col s6 m3">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="images/9toShine-screenshot.png" />
              </div>
              <div className="card-content">
                <span className="card-title left-align activator grey-text text-darken-4">Habit Formation App<i className="material-icons right">info_outline</i></span>
                <p className="left-align"><a href="https://anniemiko.github.io/Final-Project/">Open Application</a></p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Final Project<i className="material-icons right">close</i></span>
                <p>This is a habit formation app I created for the final project at The Iron Yard.</p>
              </div>
            </div>
          </div>
          <div className="col s6 m3">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="images/Etsy-recreation-screenshot.png" />
              </div>
              <div className="card-content">
                <span className="card-title left-align activator grey-text text-darken-4">Etsy Recreation<i className="material-icons right">info_outline</i></span>
                <p className="left-align"><a href="https://anniemiko.github.io/4.2-Etsy-recreation/">View Page</a></p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Etsy Recreation<i className="material-icons right">close</i></span>
                <p>This is a recreation of the Etsy main page created in week 4 of The Iron Yard program.</p>
              </div>
            </div>
          </div>
          <div className="col s6 m3">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="images/pixel-perfect-screenshot.png" />
              </div>
              <div className="card-content">
                <span className="card-title left-align activator grey-text text-darken-4">Pixel Perfect<i className="material-icons right">info_outline</i></span>
                <p className="left-align"><a href="https://anniemiko.github.io/1.4-pixel-perfect/">View Page</a></p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Pixel Perfect<i className="material-icons right">close</i></span>
                <p>This page is a pixel-perfect recreation of a design comp completed in the first week of The Iron Yard program.</p>
              </div>
            </div>
          </div>
          <div className="col s6 m3">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="images/turn-based-game-screenshot.png" />
              </div>
              <div className="card-content">
                <span className="card-title left-align activator grey-text text-darken-4">Turn-based Game<i className="material-icons right">info_outline</i></span>
                <p className="left-align"><a href="https://anniemiko.github.io/5.3-turn-based-game/">Play Game</a></p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Turn-based Game<i className="material-icons right">close</i></span>
                <p>This fun game was developed with a partner as part of the Iron Yard program.</p>
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
