const Though = require('../models/Though');
// const User = require('../models/Though');

module.exports = {
  getThoughs(req, res) {
    Thoughs.find()
    // .then(dbThoughtData => res.json(dbThoughtData))
    // .catch(err => {
    //     console.log(err);
     
    //     res.status(500).json(err);
    // });
    .select('-__v')
      .then((dbThoughsData) => res.json(dbThoughsData))
      .catch((err) => res.status(500).json(err));
  },


  getThoughId(req, res) {
    Though.findOne({ _id: req.params.thoughId })
    .select('-__v')
            .sort({
                _id: -1
            })
            .then(dbThoughData => {
                if (!dbThoughData) {
                    res.status(404).json({
                        message: 'No thought found with id.'
                    });
                    return;
                }
                res.json(dbThoughtData)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
      // .then((though) =>
      //   !though
      //     ? res.status(404).json({ message: 'No user with that ID' })
      //     : res.json(though)
      // )
      // .catch((err) => res.status(500).json(err));
  },
  // create a new user
  // createThough(req, res) {
  //   Though.create(req.body)
  //     .then((dbThoughData) => res.json(dbThoughData))
  //     .catch((err) => res.status(500).json(err));
  // },

  createThough({params, body}, res) {
    Though.create(body)
    .then(({_id}) => {
        return Users.findOneAndUpdate({ _id: params.userId}, {$push: {thoughs: _id}}, {new: true});
    })
    .then(dbThoughsData => {
        if(!dbThoughsData) {
            res.status(404).json({message: 'No thoughts with this particular ID!'});
            return;
        }
        res.json(dbThoughsData)
    })
    .catch(err => res.json(err)); 
},


//   Delete user and though
  deleteThough(req, res){
    User.findOneAndDelete({_id: params.user})
    .then((though)=>
    !though
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(though)
      )
      .catch((err) => res.status(500).json(err));
  }
        
     
    
};