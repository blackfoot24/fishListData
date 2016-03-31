//FISH
  //JUMBOTRON
  //TOGGLE FISH
  //DISPLAY FISH
  //EDIT FISH

  //FISHAPP
    //FISHBOX
      //FISHLIST
        //FISHCARD
      //FISHFORM

var React = require('react');
var FishBox = require('./fishcomps/fishbox');

var Jumbotron = React.createClass({
  render: function(){
    return(
      <div>
        <div className="jumbotron">
          <h1 className="display-3">Good Fish!</h1>
        <p className="lead">Bla, Bla, Bla, Fishy Fishy, Fish. Fish. Fish.</p>
          <hr className="m-y-2"/>
          <p>These Fish are just not for the faint of heart.</p>
          <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">Go Fish Your Self!</a>
        </p>
        </div>
      </div>
    )
  }
});

var Loader = React.createClass({
  render: function(){
    return(
    <div>
       <i className="fa-spin fa fa-spinner fa-6"></i>
    </div>
    )
  }
});

var FishApp = React.createClass({

  getInitialState: function() {
    return{
      fishArray: null
    }
  },

  submitFishToServer: function(fishData) {
    console.log(fishData)
    var self = this;
    $.ajax({
      url: '/api/fish',
      method: 'POST',
      data: fishData
    }).done(function(data){
      console.log(data);
    })
  },

  loadAllFishFromServer: function(){
    var self = this;
    $.ajax({
      url: '/api/fish',
      method: 'GET'
    }).done(function(data){
      setTimeout(function(){
      self.setState({fishArray: data})
      }, 1000);
    })
  },
  componentDidMount: function() {
    console.log('component did mount!')
    this.loadAllFishFromServer();
  },

  render: function() {
    if(this.state.fishArray) {
    return(
      <div>
      <Jumbotron />
      <FishBox submitFishToServer={ this.submitFishToServer } fishArray={ this.state.fishArray } />
      </div>
      )
  } else {
    return <Loader/>
   }
  }
});

module.exports = FishApp;