import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { rateLimit } from 'express-rate-limit';
import messageRouter from './routes/messageRouter';

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

export default app;