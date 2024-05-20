const request = require('supertest');
const mongoose = require('mongoose');
const app = require('./app');
const Sleep = require('./models/sleepModel');
const { json } = require('express');

describe('Sleep Tracker API', () => {
    beforeAll(async () => {
        const url = process.env.MONGO_URI;
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    });


    afterAll(async () => {
        await Sleep.deleteMany({});
        await mongoose.connection.close();
    });

    let testRecord;

    it('should create a new sleep record', async () => {
        const response = await request(app)
            .post('/sleep')
            .send({
                "userId": 'user1',
                "hours": "8",
                "timestamp": '2024-05-18T08:00:00Z'
            });
        expect(response.statusCode).toBe(201);
        expect(response.body.userId).toBe('user1');
        testRecord = response.body;
    });

    it('should get all sleep records for a user', async () => {
        const response = await request(app).get('/sleep/user1');
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(1);
        expect(response.body[0].userId).toBe('user1');
    });

    it('should delete a sleep record', async () => {
        const response = await request(app).delete(`/sleep/${testRecord._id}`);
        expect(response.statusCode).toBe(204);
    });

    it('should return 404 when trying to delete a non-existing record', async () => {
        const response = await request(app).delete(`/sleep/nonexistingid`);
        expect(response.statusCode).toBe(404);
    });
});
