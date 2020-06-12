const mongoose = require('mongoose');

const sampleSchema = new mongoose.Schema({
    fieldName: {
        type: String,
        unique: false,
        required: true,
    }
},
// If you want your model to store
// timestamps when things are updated/created
// keep this code, otherwise, throw it away
{
    timestamps: true,
}
);

module.exports = sampleSchema;