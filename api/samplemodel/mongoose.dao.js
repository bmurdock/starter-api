const mongoose = require('mongoose');
const schema = require('./sample.model');

schema.statics = {
    // since these are our CRUD methods, why not call them by their CRUD names?
    create: function(data, callback)
    {
        const document = new this(data);
        document.save(callback)
    },
    read: function(query, callback)
    {
        this.find(query, callback);
    },
    update: function(query, data, callback)
    {
        this.findOneAndUpdate(query, {$set: data}, {new: true}, callback);
    },
    delete: function(query, callback)
    {
        this.findOneAndDelete(query, callback);
    }
}
// the first argument is the proper name of your collection
const model = mongoose.model('Sample', schema);
module.exports = model;