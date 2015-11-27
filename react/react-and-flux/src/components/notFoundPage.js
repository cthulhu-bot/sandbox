"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Page not Found</h1>
        <p>Whoops, eat a fucking dick!</p>
        <p><Link to="app">Fuck off</Link></p>
      </div>
    );
  }
});

module.exports = NotFoundPage;
