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
<<<<<<< HEAD
    userid: { type: String, ref: 'User', required: true }, // Reference to the user
=======
    userid: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user
>>>>>>> eb1672d09d953003bb3441ad03747b2a8227a82b
    date: { type: Date, default: Date.now } // Date of the expense (defaults to now)
});

/**
 * @desciption Mongoose model for the Costs collection
 */
const Costs = mongoose.model('costs', costSchema);

module.exports = Costs;