const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    // updateUser,
    deleteUser,
    // addFriend,
    // removeFriend,
  } = require('../../controller/userController');
  
  // /api/users
  router.route('/').get(getUsers).post(createUser);
  
  // /api/users/:userId
  router.route('/:userId').get(getSingleUser).delete(deleteUser);
  
//   router.route('/:Id/friends/:friendId').post(addFriend).delete(removeFriend);
  module.exports = router;