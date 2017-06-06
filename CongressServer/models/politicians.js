/**
 * Created by bcuser on 6/5/17.
 */
var mongoose = require('mongoose');

var politicianSchema = mongoose.Schema({
    'firstName': String,
    'lastName': String,
});

module.exports = mongoose.model('politician', politicianSchema);