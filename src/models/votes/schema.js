const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  isLike: {
    type: Boolean,
    required: [true]
  },
  answerBy: {
    type: ObjectId,
    required: [true]
  },
  createdAt: {
    type: Date,
    required: [true],
  },
  createdBy: {
    type: ObjectId,
  }
});

module.exports = { schema };