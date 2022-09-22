const router = require('express').Router();
const {
    getThoughs,
    getThoughId,
    createThough,
    // updateThough,
  //  removeThough,
   deleteThough,
    // addReaction,
    // removeReaction,
  } = require('../../controller/thoughController');
const { create } = require('../../models/Though');

  // /api/though
  router.route('/').get(getThoughs);
  router.route('/:userId').post(createThough);
  

  router.route('/:thoughId').get(getThoughId).delete(deleteThough);
  
//   router.route('/:thoughId')
// //   .post(getThoughById)
// // //   .put('updateThoughById')
//   .delete(removeThough);


//   router.route('/:thoughId/reactions')
//   .post('addReaction')


//  router.route('/:thoughId/reactions/:reactionId').delete('removeReaction');
//   module.exports = router;