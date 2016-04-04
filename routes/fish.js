var express = require('express');
var router = express.Router();
var Fish = require('../models/fish');

router.route('/')
//GET ALL FISH FROM /api/fish
.get(function(req, res){
      Fish.find(function(err, fishes){
      if(err){
        console.log(err)
      } else {
        res.json(fishes)
      }
  });
})

//POST FISH TO /api/fish
.post(function(req, res){

  //CREAT NEW FISH
  var fish = new Fish({
    name: req.body.name,
    color: req.body.color,
    people_eater: req.body.people_eater,
    length: req.body.length,
    img: req.body.img,
  })
  //SAVE FISH WITH NODE STYLE CALLBACK
  fish.save(function(err, fish){
    if(err){
    res.status(500).send(err, 'Something broke!');
    } else {
      res.json(fish);
    }
  });
})

router.route('/oneFish/:fish_id')
//GET ONE FISH FROM /API/FISH/ID_NUMBER
  .get(function(req, res){
    Fish.findById( req.params.fish_id, function(err, fish){
      if(err){
        res.status(500).send(err, 'Something is not right!');
      } else {
        res.json(fish);
      }
    });
  })

  //don't forget put means edit!
  .put(function(req, res){
    Fish.findById( req.params.fish_id, function(err, fish){
      if(err) {
      } else {
        fish.name = req.body.name ? req.body.name : fish.name;
        fish.color = req.body.color ? req.body.color : fish.color;
        fish.length = req.body.length ? req.body.length : fish.length;
        fish.people_eater = req.body.people_eater ? req.body.people_eater : fish.people_eater;
        fish.img = req.body.img ? req.body.img : fish.img;
        fish.save(function(err){
          if(err){
            res.status(500).send(err, 'put is working');
          } else {
            res.json(fish);
          }
        })
      }
    });
  })

  .delete(function(req, res){
    //Must past in a query parameter, { }
    Fish.remove({_id: req.params.fish_id}, function(err, fish){
      if(err){
        res.status(500).send(err, 'Delete is working');
      } else {
        res.json(fish);
      }
    });
  })

router.route('/man_eater')
  .get(function(req, res){
    Fish.find({people_eater: true}, function(err, fish){
      if(err){
        res.status(500).send(err, 'Not right!');
      } else {
        res.json(fish);
      }
    });
  })


module.exports = router;