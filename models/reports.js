const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    userid: { type: String, required: true },
    year: { type: Number, required: true },
    month: { type: Number, required: true },
    costs: { type: Object, required: true } // Stores categorized cost details
}, { timestamps: true });

module.exports = mongoose.model('Report', ReportSchema);
