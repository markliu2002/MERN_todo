const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Todos', TodoSchema);