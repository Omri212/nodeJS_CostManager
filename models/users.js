const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * @desciption Defines the User schema for MongoDB
 * @modlue models/users
 */

const userSchema = new Schema({
    id: { type: String, required: true }, // Unique user iD
    first_name: { type: String, required: true }, // User's frist name
    last_name: { type: String, required: true }, // User's last name
    birthday: { type: Date, required: true }, // Date of birht
    marital_status: { type: String, required: true } // Marrital status (single, maried, etc.)
});

/**
 * @desciption Mongoose model for the Users colecttion
 */
const Users = mongoose.model('users', userSchema);

module.exports = Users;
