var Block = require('../models/Block');

// GET
function getAll(request, response) {
  Block.find(function(error, stories) {
    if(error) return response.status(404).send(error);

    response.status(200).send(stories);
  }).select('-__v');
}



// POST
function createBlock(request, response) {
  var block = new Block(request.body);

  block.save(function(error) {
    if(error) return response.status(500).send(error);

    response.status(201).send(block);
  });
}


// GET
function getBlock(request, response) {
  var id = request.params.id;

  Block.findById({_id: id}, function(error, block) {
    if(error) return response.status(404).send(error);

    response.status(200).send(block);
  }).select('-__v');
}

function updateBlock(request, response) {
  var id = request.params.id;

  Block.findById({_id: id}, function(error, block) {
    if(error) return response.status(404).send(error);

    if(request.body.title) block.title = request.body.title;
    if(request.body.author) block.author = request.body.author;

    block.save(function(error) {
      if(error) return response.status(500).send(error);

      response.status(200).send(block);
    });
  }).select('-__v');
}

function removeBlock(request, response) {
  var id = request.params.id;

  Block.remove({_id: id}, function(error) {
    if(error) return response.status(404).send(error);

    return response.status(200).json({message: "deleted block"});
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createBlock: createBlock,
  getBlock: getBlock,
  updateBlock: updateBlock,
  removeBlock: removeBlock
}

