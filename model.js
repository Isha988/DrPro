const mongoose = require('mongoose');

const keywordSchema = new mongoose.Schema({
    word: String
});

const keywords = mongoose.model('keywords', keywordSchema);

const doctorSchema = new mongoose.Schema({
    name: String,
    specialization: String,
    designation: [String],
    clinic: String,
    photo: String,
    address: String,
    mobile: Number,
    email: String,
    fee: Number,
    education: [String],
    languages: [String],
    workHours: [String],
    keywords: [String]
});
const doctors = mongoose.model('doctors', doctorSchema);

module.exports = {keywords, doctors};