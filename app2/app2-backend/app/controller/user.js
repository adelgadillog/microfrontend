const { reset } = require("nodemon");
const mongoose = require('mongoose');
const model = require("../models/user");

const options = {
  page: 1,
  limit: 10,
};

const parseId = (id) => {
  return mongoose.Types.ObjectId(id);
};

exports.postData = (req, res) => {
  const data = req.body;
  model.create(data, (err, docs) => {
    if (err) {
      res.send({ err: "Error:" + err }, 422);
    } else {
      res.send({ docs });
    }
  });
};

exports.updateSingle = (req, res) => {
  const { id } = req.params;
  const body = req.body;
  model.updateOne(
    {
      id: parseId(id),
    },
    body,
    (err, docs) => {
      res.send({ items: docs });
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
      res.send({ items: docs });
    }
  );
};

