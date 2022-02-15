const mongoose = require("mongoose");
const apodSchema = new mongoose.Schema({
    date: { type: String, unique: true },
    title: String,
    copyright: String,
    desc: String,
    media_type: { type: String, enum: ['image', 'video'] },
    media_url: String,
});

module.exports = mongoose.model("Apod", apodSchema);


