import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { rateLimit } from 'express-rate-limit';
import messageRouter from './routes/messageRouter';

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || '';

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 10,
    message: 'Too many requests from this IP, please try again later',
});

const app = express();

app.use(limiter);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/message', messageRouter)

export default { app };

if (MONGO_URI === '') {
    console.error('Please set MONGO_URI in .env');
    process.exit(1);
}

mongoose.connect(MONGO_URI)
.then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });
}).catch((err) => {
    console.error('Error connecting to the database', err);
    process.exit(1);
});