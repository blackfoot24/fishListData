  //FISHAPP
    //FISHBOX
      //TOGGLER
      //FISHLIST
        //FISHCARD
      //FISHFORM
    //JUMBOTRON
    //LOADER

var React = require('react');
var FishListData = require('./FishListData');
var FishFormData = require('./FishFormData');
var FishDetailsData = require('./FishDetailsData');
//FishBox
  //FishList
    //FishCard

var Toggler = React.createClass({
  render: function() {
    return (
        <div className="container">
          <div className="btn-group" data-toggle="buttons">
          <button onClick={this.props.toggleActiveComp.bind(null, 'fish')}className="btn btn-primary">Fish Display</button>
            <button onClick={this.props.toggleActiveComp.bind(null, 'form')}className="btn btn-primary">Modify Fish</button>
        </div>
      </div>
    )
  }
});

var FishBox = React.createClass({
  getInitialState: function(){
    return{
      activeComponent: 'fish',
      activeFishId: null,
    }
  },

  getId: function(id) {
    return this.setState({ activeFishId: id, activeComponent: 'oneFish' })
  },

  showComp: function(){
    if(this.state.activeComponent === 'fish'){
      return <FishListData getId={this.getId} />
    } else if (this.state.activeComponent === 'form'){
      return <FishFormData toggleActiveComp={this.toggleActiveComp} />
    } else if (this.state.activeComponent === 'oneFish'){
      return <FishDetailsData id={this.state.activeFishId} />
    } else {
      throw new Error("Invalid activeComponent", this.state.activeComponent)
    }
  },

  toggleActiveComp: function(name){
    this.setState({activeComponent: name})
  },

  render: function() {
    return (
        <div className="container myContainer">
          <Toggler toggleActiveComp={this.toggleActiveComp}/>
          { this.showComp() }
        </div>
      )
  }
});

module.exports = FishBox;