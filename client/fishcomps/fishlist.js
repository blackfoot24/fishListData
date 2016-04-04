  /*FISHAPP
    FISHBOX
      TOGGLER
      FISHLIST
        FISHCARD
      FISHFORM
  JUMBOTRON
    LOADER*/

var React = require('react');
var FishCard = require('./FishCard');

function FishList(props) {
  console.log("Props in fish list", props);

  var allFish = props.fishArray.map(item => {
    return(
      <FishCard
      deleteFish={ props.deleteFish }
      getId={ props.getId }
      id={ item._id }
      key={ item._id } 
      name={ item.name }
      color={ item.color }
      people_eater={ item.people_eater }
      length={ item.length }
      img={ item.img } />
  );
});

    return (
      <div className="fish-flex">
        { allFish }
      </div>
    )
};



module.exports = FishList;