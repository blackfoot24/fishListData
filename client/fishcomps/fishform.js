  //FISHAPP
    //FISHBOX
      //TOGGLER
      //FISHLIST
        //FISHCARD
      //FISHFORM
    //JUMBOTRON
    //LOADER

var React = require('react');


var FishForm = React.createClass({
  getInitialState: function() {
    return {
      fishName: null,
      peopleEater: null,
      color: null,
      img: null,
      length: null,
    }
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

  handleFormSubmit: function(event) {
    event.preventDefault();
    var fishData = {
      name: this.state.fishName.trim(),
      color: this.state.color.trim(),
      length: this.state.length.trim(),
      img: this.state.img.trim(),
      people_eater: this.state.peopleEater
    };

    console.log("your fish: ", fishData);

    this.props.submitFishToServer(fishData);
    this.setState({name: '', color: '', length: '', img: '', people_eater: ''})

  },

  render: function () {
    return (
     <div>
      <form onSubmit={ this.handleFormSubmit }>
        <h3> Enter New Fish </h3>
        <fieldset className="form-group">
          <label>name</label>
          <input onChange={this.onNameChange} value={this.state.fishName} type="text" className="form-control"/>
        </fieldset>

        <fieldset className="form-group">
          <label>color</label>
          <input onChange={this.onColorChange} value={this.state.color} type="text" className="form-control"/>
        </fieldset>

        <fieldset className="form-group">
          <label>length</label>
          <input onChange={this.onLengthChange} value={this.state.length} type="text" className="form-control"/>
        </fieldset>

        <fieldset className="form-group">
          <label>img src</label>
          <input onChange={this.onImageChange} value={this.state.onImageChange} type="text" className="form-control"/>
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="exampleSelect1">Man Eater?</label>
          <select onChange={ this.onPeopleEaterChange } className="form-control">
          <option value={true}>yes</option>
          <option value={false}>no</option>
          </select>
        </fieldset>
        <button type="submit" className="btn btn-success-outline">Submit</button>
      </form>
      </div>
    )
  }
});

module.exports = FishForm;