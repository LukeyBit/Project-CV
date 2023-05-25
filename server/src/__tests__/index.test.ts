import app from '../index';
import supertest from 'supertest';

jest.mock('mongoose', () => {
    return {
        connect: jest.fn(() => Promise.resolve('Connected to MongoDB')),
        Schema: jest.fn(),
        model: jest.fn(),
    };
});


describe('Test the root path', () => {
    test('It should respond 400 with a message to the empty POST method', async () => {
        const response = await supertest(app).post('/message');
        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Missing required fields');
    });
});