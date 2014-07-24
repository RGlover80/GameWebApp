'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Image Schema
 */
var ImageSchema = new Schema({
  name: String,
  picture: String
});

mongoose.model('Image', ImageSchema);
