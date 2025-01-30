const mongoose = require('mongoose');

/**
 * @desciption MongoDB connection utility
 * @modlue database/connection
 */

const uri = "mongodb+srv://OmriShmuel:Omr!3147@cluster0.mrr1c.mongodb.net/CostManager?retryWrites=true&w=majority&appName=Cluster0";

/**
 * @func connectDB
 * @desc Attemps to connect to MongoDB using Mongoose
 */
const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB conected');
    } catch (error) {
        console.error('Databse conection error:', error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;