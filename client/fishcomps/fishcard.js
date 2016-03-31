  //FISHAPP
    //FISHBOX
      //TOGGLER
      //FISHLIST
        //FISHCARD
      //FISHFORM
    //JUMBOTRON
    //LOADER

var React = require('react');

var fishCard = React.createClass({
  render: function() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.img} alt="Card image cap"/>
        <div className="card-block">
          <h1 className=""> { this.props.name } </h1>
          <h2 className=""> { this.props.length } </h2>
          <h3 className=""> { this.props.people_eater } </h3>
          <h4 className=""> { this.props.color } </h4>
          <p className="card-text">This is FishCard!</p>
          <a href="#" className="btn btn-primary">Button</a>
        </div>
      </div>
    )
  }
});

module.exports = fishCard;