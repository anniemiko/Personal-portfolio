var React = require('react');
var $ = window.jQuery = require('jquery');
var Materialize = require('materialize-css');
require('../../../node_modules/materialize-css/bin/materialize.js');

class BaseLayout extends React.Component{
  constructor(props){
    super(props)
      $(".button-collapse").dropdown();
      $('.collapsible').collapsible();
  }
  componentDidMount(){
      $(".button-collapse").dropdown();
      $('.collapsible').collapsible();
  }
  render(){
  return(
    <div className="page-flexbox-wrapper">
      <header>
        <nav>
          <div className="nav-wrapper navbar">
            <a className="brand-logo left"><img src="./images/AB-woodgrain-NAME.png" /></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li className="nav"><a href="#portfolio">Portfolio</a></li>
              <li className="nav"><a href="#about">About</a></li>
            </ul>
          </div>
        </nav>
        <a href="#!" data-activates="mobile-demo" className="button-collapse dropdown-button hide-on-large-only" onClick={$(".dropdown-button").dropdown()}><i className="material-icons">menu</i></a>
        <ul className="dropdown-content" id="mobile-demo">
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </header>
      <main>
          <div className="main">
                {this.props.children}
          </div>
      </main>
      <footer className="page-footer">
            <p className="copyright">&copy; 2017 Andrea Baty </p>
      </footer>
    </div>
    )
  }
}

module.exports = {
  BaseLayout
}
