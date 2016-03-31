  //FISHAPP
    //FISHBOX
      //TOGGLER
      //FISHLIST
        //FISHCARD
      //FISHFORM
    //JUMBOTRON
    //LOADER

var React = require('react');
var FishList = require('./fishlist');
var FishForm = require('./fishform');
//FishBox
  //FishList
    //FishCard

var Toggler = React.createClass({
  render: function() {
    return (
        <div className="container">
          <div className="btn-group" data-toggle="buttons">
          <button onClick={this.props.toggleActivecomp.bind(null, 'fish')}className="btn btn-primary">Fish Display</button>
            <button onClick={this.props.toggleActivecomp.bind(null, 'form')}className="btn btn-primary">Modify Fish</button>
        </div>
      </div>
    )
  }
});

var FishBox = React.createClass({
  getInitialState: function(){
    return{
      activeComponent: 'fish'
    }
  },

  showComp: function(){
    if(this.state.activeComponent === 'fish'){
      return <FishList fishArray={ this.props.fishArray }/>
    } else if (this.state.activeComponent === 'form'){
      return <FishForm submitFishToServer={ this.props.submitFishToServer} />
    } else {
      return <FishList fishArray={this.props.fishArray}/>
    }
  },

  toggleActivecomp: function(name){
    this.setState({activeComponent: name})
  },

  render: function() {
    console.log(this.props.fishArray)
    return (
      <div className="container myContainer">
      <Toggler toggleActivecomp={this.toggleActivecomp}/>
        { this.showComp() }
      </div>
    )
  }
});

module.exports = FishBox;