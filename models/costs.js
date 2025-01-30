const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * @desciption Defines the Cost schema for MongoDB
 * @modlue models/costs
 */

const costSchema = new Schema({
    description: { type: String, required: true }, // Short desciption of the cost
    sum: { type: Number, required: true }, // The amount spent
    category: { type: String }, // Category of expense (e.g., food, education, etc.)
    user_id: { type: String, required: true }, // ID of the user associated with the cost
    date: { type: Date, default: Date.now } // Date of the expense (defaults to now)
});

/**
 * @desciption Mongoose model for the Costs collection
 */
const Costs = mongoose.model('costs', costSchema);

module.exports = Costs;