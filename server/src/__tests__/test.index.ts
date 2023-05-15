import app from '../server';
import supertest from 'supertest';

describe('Test the root path', () => {
    test('It should respond 200 with a message to the POST method', async () => {
        const response = await supertest(app).post('/message').send({
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@email.com',
            message: 'Hello world'
        })
        .set('Content-Type', 'application/json');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Message sent and saved');
    });
});