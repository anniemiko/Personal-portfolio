var React = require('react');
var $ = window.jQuery = require('jquery');
var Backbone = require('backbone');
var Materialize = require('materialize-css');


var BaseLayout = require('./base.jsx').BaseLayout;

class ResumeContainer extends React.Component {
render(){
  return(
    <BaseLayout>
      <div className="row center">
        <h2 className="header white-text center">Resume</h2>
          <div className="center col m6 push-m3 s12">
          <img src="images/AndreaBatyResume2017.png" />
          </div>
          <div className="center col s12">
          <a href="images/AndreaBatyResume2017.pdf" download="AndreaBatyResume"><h5 className="white-text">Download Resume</h5></a>
          </div>
      </div>
    </BaseLayout>
    )
  }
}

module.exports = {
  ResumeContainer
}
