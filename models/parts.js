const mongoose = require('mongoose');

const partsSchema = new Schema({
    name:  { type: String, required: true },
    amount:   { type: Number, required: true },
    description: { type: String, required: true },
    Bought: {type: Boolean},
    Installed: {type: Boolean},
});
const PartsCollection =mongoose.model('Parts', partsSchema);
module.exports= PartsCollection;