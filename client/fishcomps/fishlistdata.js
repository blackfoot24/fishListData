var React = require('react');
var Loader = require('./FishLoader');
var FishList = require('./FishList');

var fishData = React.createClass({

  getInitialState: function() {
    return {
      allFish: null
    }
  },
  loadAllFishFromServer: function() {
    var self = this;
    $.ajax({
      url: '/api/fish',
      method: 'GET'
    }).done(data => this.setState({ allFish: data }) );
  },
  componentDidMount() {
    this.loadAllFishFromServer();
  },
  render() {
    return this.state.allFish ? <FishList fishArray={this.state.allFish} getId={this.props.getId}/> : <Loader/>;
  }
});

module.exports = fishData;