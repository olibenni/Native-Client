// var React    = require('react');
// var ReactDOM = require('react-dom');

import React from 'react';
import ReactDOM from 'react-dom';
import InputBox from './components/inputBox/InputBox.jsx';

var Main = React.createClass({
  render: function(){
    return(
      <div>


        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu>
              <li className="menu-text">Native</li>
              <li>
                <a href="#">One</a>
                <ul className="menu vertical">
                </ul>
              </li>
              <li><a href="#">Two</a></li>
              <li><a href="#">Three</a></li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li><input type="search" placeholder="Search" /></li>
              <li><button type="button" className="button">Search</button></li>
            </ul>
          </div>
        </div>


        <div className="button small-12">Click my anus</div>


        <div className="row">
          <div className="small-6">
            <input type="search" placeholder="Where are you going?" />
            <button type="button" className="button">Search</button>
          </div>



          <ul className="menu">
            <li><input type="search" placeholder="Where are you going?" /></li>
            <li><button type="button" className="button">Search</button></li>
            <li><button type="button" className="button success">Filters</button></li>
          </ul>
        </div>


        <ul className="menu">
          <li><a href="#">Item One</a></li>
          <li><a href="#">Item Two</a></li>
          <li><a href="#">Item Three</a></li>
        </ul>


        First Name <InputBox initialText={"Cock"} />
        Last Name <InputBox />


        <div className="button small-2 success">Click Me</div>
      </div>
    )
  }
});



ReactDOM.render(<Main />, document.getElementById('app'));