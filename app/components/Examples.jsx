var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example places to try out:</p>
      <ol>
        <li>
          <Link to="/?location=wichita">Wichita, KS</Link>
        </li>
        <li>
          <Link to="/?location=New%20York%20City">NYC</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
