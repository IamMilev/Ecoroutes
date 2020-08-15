const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const { String, Number, Date } = Schema.Types;


const ecotrailSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    author_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    duration: { type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Ecotrail', ecotrailSchema)