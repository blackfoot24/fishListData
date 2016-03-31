  //FISHAPP
    //FISHBOX
      //TOGGLER
      //FISHLIST
        //FISHCARD
      //FISHFORM
    //JUMBOTRON
    //LOADER

var React = require('react');
var FishCard = require('./fishcard');

var FishList = React.createClass({
  render: function(){
    console.log(this.props.fishArray)
  var allFish = this.props.fishArray.map(function(item){
    return(
      <FishCard
      name={item.name}
      color={item.color}
      people_eater={item.people_eater}
      length={item.length}
      img={item.img} />
  );
})

    return (
      <div className="">
        { allFish }
      </div>
    )
  }
});

module.exports = FishList;