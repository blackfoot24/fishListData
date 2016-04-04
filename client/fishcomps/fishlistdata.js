var React = require('react');
var Loader = require('./FishLoader');
var FishList = require('./FishList');

var fishData = React.createClass({

  getInitialState: function() {
    return {
      allFish: null
    }
  },

  contextTypes: {
    sendNotification: React.PropTypes.func.isRequired
  },

  deleteFish(id) {
    var self = this;
    if(confirm('Really??') ) {
    $.ajax({
      url: '/api/fish/oneFish/' + id,
      method: 'DELETE'
    }).done(data => this.sendNotification('This Fish Deleted.'); 
    self.loadAllFishFromServer();
    });
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
    return this.state.allFish ? <FishList fishArray={this.state.allFish} getId={this.props.getId} deleteFish={this.deleteFish} /> : <Loader/>;
  }
});

module.exports = fishData;