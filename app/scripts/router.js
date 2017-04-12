var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var PortfolioContainer = require('./components/portfolio.jsx').PortfolioContainer;
var AboutContainer = require('./components/about.jsx').AboutContainer;
var ResumeContainer = require('./components/resume.jsx').ResumeContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'port',
    'home': 'port',
    'portfolio': 'port',
    'about': 'about',
    'resume': 'resume'
  },
  port: function(){
    ReactDOM.render(
      React.createElement(PortfolioContainer),
      document.getElementById('app')
    )
  },
  about: function(){
    ReactDOM.render(
      React.createElement(AboutContainer),
      document.getElementById('app')
    )
  },
  resume: function(){
    ReactDOM.render(
      React.createElement(ResumeContainer),
      document.getElementById('app')
    )
  }
})

var router = new AppRouter();

module.exports = router
