const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    prb_tags:[String],
    prb_name: {
        type: String,
        required: true
    },
    prb_description: {
        type: String,
        required: true
    },
    prb_inputTestCase: {
        type: String,
        required: true
    },
    prb_outputTestCase: {
        type: String,
        required: true
    },
    prb_difficultyLevel: {
        type: Number,
        required: true

    },
    prb_points: {
        type: Number,
        required: true
    },
    prb_editorial: {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('problem', problemSchema);