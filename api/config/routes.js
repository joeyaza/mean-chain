var express = require('express');
var   router = express.Router();
var   bodyParser = require('body-parser');
var   methodOverride = require('method-override');
console.log('here')

var blocksController = require('../controllers/blocks');


// ****** BLOCKS ******* //
// http://127.0.0.1:3000/
router.route('/')

  //GET all blocks
  .get(blocksController.getAll)

  //POST a new Block
  .post(blocksController.createBlock);

router.route('/:id')

  // GET return specific blocks
  .get(blocksController.getBlock)

  // PUT update existing blocks
  .put(blocksController.updateBlock)

  // DELETE remove specific Block from DB
  .delete(blocksController.removeBlock);



module.exports = router