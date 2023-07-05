const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: String,
    due_date: Date,
    category: String,
    createdOn: {type: Date, default: Date.now()}
});

const todoModel = mongoose.model('todo', todoSchema);

module.exports = todoModel;