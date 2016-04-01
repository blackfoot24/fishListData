  //FISHAPP
    //FISHBOX
      //TOGGLER
      //FISHLIST
        //FISHCARD
      //FISHFORM
    //JUMBOTRON
    //LOADER

var React = require('react');

function fishCard(props) {
    return (
      <div className="card">
        <img className="card-img-top fish-img" src={props.img} alt="Card image cap"/>
        <div className="card-block">
          <h1 className=""> { props.name } </h1>
          <h2 className=""> { props.length } </h2>
          <h3 className=""> { props.people_eater } </h3>
          <h4 className=""> { props.color } </h4>
          <button onClick={props.getId.bind(null, props.id)} className="btn btn-primary">Go</button>
          <p className="card-text">This is FishCard!</p>
        </div>
      </div>
    )
  }

module.exports = fishCard;