const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ecorouteSchema = new Schema({
    username: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const ecoroute = mongoose.model('ecoroute', ecorouteSchema);

module.exports = ecoroute;