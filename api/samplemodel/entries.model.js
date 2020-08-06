const mongoose = require('mongoose');

const entriesSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    archived: {
        type: Boolean,
        required: true,
    },
    interesting: {
        type: Boolean,
        required: false,
    }

},
// If you want your model to store
// timestamps when things are updated/created
// keep this code, otherwise, throw it away
{
    timestamps: true,
}
);

module.exports = entriesSchema;