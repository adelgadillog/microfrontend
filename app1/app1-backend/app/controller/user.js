const { reset } = require("nodemon");
const mongoose = require('mongoose');
const model = require("../models/user");



const parseId = (id) => {
  return mongoose.Types.ObjectId(id);
};

exports.getData = (req, res) => {

  model.find({}, (err, users) => {
   
    res.json(
      users
    );
  });
};

exports.findSingle = (req, res) => {
  const { id } = req.params;
  model.findOne(
    {
      id: parseId(id),
    },
    (err, user) => {
      res.send(user);
    }
  );
};

exports.deleteSingle = (req, res) => {
  const { id } = req.params;
  model.deleteOne(
    {
      id: parseId(id),
    },
    (err, docs) => {
      res.send( {message:'Delete success'} );
    }
  );
};
