"use strict"

const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true
 },
  blogId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Blog', 
    required: true 
},
  comment: { 
    type: String, 
    required: true 
},
}, { 
  timestamps: true, 
  collection:'comments' 
});

module.exports = mongoose.model('Comment', CommentSchema);

