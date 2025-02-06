const request = require('supertest');
const express = require('express');
const router = require('../routes/api');
const mongoose = require('mongoose');
const Cost = require('../models/costs');
const User = require('../models/users');
const connectDB = require('../models/database'); // Importing database connection

const app = express();
app.use(express.json());
app.use('/api', router);

describe('API Tests', () => {

    // This runs before all the tests to connect to the database
    beforeAll(async () => {
        await connectDB(); // Connect to the database before starting tests
    });

    // This runs after all tests to disconnect the database
    afterAll(async () => {
        await mongoose.disconnect(); // Disconnect from MongoDB after tests
    });

    describe('POST /api/add', () => {

        it('should add a cost entry', async () => {
            // Create a user in the database
            const user = await User.create({
                id: '123',
                first_name: 'John',
                last_name: 'Doe',
                marital_status: 'single',
                total_cost: 0
            });

            // Data to be sent in the request
            const costData = {
                userid: '123',
                category: 'food',
                description: 'Lunch',
                sum: 20,
                date: '2024-02-06'
            };

            // Send POST request to add a new cost entry
            const res = await request(app).post('/api/add').send(costData);

            // Test that the status code is 201 (created) and that the returned data has the correct userid
            expect(res.statusCode).toBe(201);
            expect(res.body.userid).toBe(costData.userid);
        });

        it('should fail if missing fields', async () => {
            // Send POST request without required fields
            const res = await request(app).post('/api/add').send({});

            // Test that it returns a 400 error and an appropriate error message
            expect(res.statusCode).toBe(400);
            expect(res.body.error).toMatch(/Missing required fields/);
        });

    });

    describe('GET /api/report', () => {

        it('should return a monthly report', async () => {
            // Send GET request for a report
            const res = await request(app).get('/api/report').query({ id: '123', year: '2024', month: '2' });

            // Test that it returns status 200 and the correct userid
            expect(res.statusCode).toBe(200);
            expect(res.body.userid).toBe('123');
        });

        it('should fail if missing params', async () => {
            // Send GET request without required query parameters
            const res = await request(app).get('/api/report').query({});

            // Test that it returns a 400 error if missing params
            expect(res.statusCode).toBe(400);
            expect(res.body.error).toMatch(/Missing required query parameters/);
        });

    });

    describe('GET /api/users/:id', () => {

        it('should get user details', async () => {
            // Create a user in the database
            await User.create({ id: '456', first_name: 'John', last_name: 'Doe', marital_status: 'single', total_cost: 100 });

            // Send GET request to fetch user details
            const res = await request(app).get('/api/users/456');

            // Test that it returns the correct user information
            expect(res.statusCode).toBe(200);
            expect(res.body.first_name).toBe('John');
        });

        it('should return 404 if user not found', async () => {
            // Send GET request for a non-existing user
            const res = await request(app).get('/api/users/999');

            // Test that it returns a 404 error if user is not found
            expect(res.statusCode).toBe(404);
            expect(res.body.error).toMatch(/User not found/);
        });

    });

    describe('GET /api/about', () => {

        it('should return team info', async () => {
            // Send GET request for team information
            const res = await request(app).get('/api/about');

            // Test that it returns status 200 and has team info
            expect(res.statusCode).toBe(200);
            expect(res.body.length).toBeGreaterThan(0);
        });

    });

});
