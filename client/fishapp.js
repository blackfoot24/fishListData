  //FISHAPP
    //FISHBOX
      //TOGGLER
      //FISHLIST
        //FISHCARD
      //FISHFORM
    //JUMBOTRON
    //LOADER

var React = require('react');
var FishBox = require('./fishcomps/fishbox');
var FishJumbotron = require('./fishcomps/fishjumbo');

var FishApp = React.createClass({

  render: function() {
      return (
        <div>
          <FishJumbotron />
          <FishBox />
        </div>
      )
  }
});

module.exports = FishApp;