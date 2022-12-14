const User = require('../models/User');

module.exports = {
  getUsers(req, res) {
    User.find()
    .select('-__v')
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },


  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },


//   Delete user and though
  deleteUser(req, res){
    User.findOneAndDelete({_id: req.params.userId})
    .then((user)=>
    !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  }
        
     
    
};

//
