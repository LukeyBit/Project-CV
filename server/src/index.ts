import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import message from './routes/message';

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || '';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/message', message)

if (MONGO_URI !== '') {
    mongoose.connect(MONGO_URI,{
        
    });
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('MongoDB database connection established successfully');
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});