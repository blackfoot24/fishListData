var React = require('react');
var FishForm = require('./FishForm');

var FishFormData = React.createClass({
  getInitialState: function() {
    return {
      fishName: null,
      peopleEater: null,
      color: null,
      img: null,
      length: null,
    }
  },

  contextTypes: {
    sendNotification: React.PropTypes.func.isRequired
  },

  onNameChange: function(event) {
    this.setState({ fishName: event.target.value })
    console.log("name", this.state.fishName)
  },

  onColorChange: function(event) {
    this.setState({ color: event.target.value })
    console.log("color", this.state.color)
  },

  onLengthChange: function(event) {
    this.setState({ length: event.target.value })
    console.log("length", this.state.length)
  },

  onPeopleEaterChange: function(event) {
    this.setState({ peopleEater: event.target.value })
    console.log("people_eater", this.state.peopleEater)
  },

  onImageChange: function(event) {
    this.setState({ img: event.target.value })
    console.log("image", this.state.img)
  },

    submitFishToServer: function(fishData) {
      event.preventDefault();
    console.log(fishData)

     var fishData = {
      name: this.state.fishName.trim(),
      color: this.state.color.trim(),
      length: this.state.length.trim(),
      img: this.state.img.trim(),
      people_eater: this.state.peopleEater
    };


    var self = this;
    $.ajax({
      url: '/api/fish',
      method: 'POST',
      data: fishData
    }).done(function(data){
      console.log("Indide Post fish success", data);
      self.props.toggleActiveComp('fish');
      self.context.sendNotification('Added Fish!!!!');
    });

    this.setState({name: '', color: '', length: '', img: ''});

  },


render: function() {
    return (
            <FishForm
            submitFishToServer={ this.state.submitFishToServer }
            fishName={ this.state.fishName }
            peopleEater={ this.state.peopleEater }
            color={ this.state.color }
            img={ this.state.img }
            length={ this.state.length }
            onNameChange={this.onNameChange}
            onColorChange={this.onColorChange}
            onImageChange={this.onImageChange}
            onPeopleEaterChange={this.onPeopleEaterChange}
            onNameChange={this.onNameChange}  />
    )
  }
});

module.exports = FishFormData;