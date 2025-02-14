const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * @desciption Defines the Cost schema for MongoDB
 * @modlue models/costs
 */

const costSchema = new Schema({
    description: { type: String, required: true }, // Short description of the cost
    sum: { type: Number, required: true }, // The amount spent
    category: { type: String, enum: ['food', 'health', 'housing', 'sport', 'education', ''], required: false ,default: ""}, // Category of expense
    userid: { type: Number, ref: 'User', required: true }, // Reference to the user
    date: { type: Date, default: Date.now } // Date of the expense (defaults to now)
});

/**
 * @desciption Mongoose model for the Costs collection
 */
const Costs = mongoose.model('costs', costSchema);

module.exports = Costs;