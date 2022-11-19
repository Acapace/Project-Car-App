const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const projectmgtSchema = new Schema({
    task_or_item:   { type: String, required: true },
    work_done_by_or_vendor: { type: String, required: true },
    cost:   { type: Number, required: true },
    time_frame:   { type: Number, required: true },
    description: { type: String, required: true },
    bought: {type: Boolean},
    installed: {type: Boolean},
});

const Projectmgt =mongoose.model('Projectmgt', projectmgtSchema);
module.exports= Projectmgt;