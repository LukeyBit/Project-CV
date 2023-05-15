import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './server';

dotenv.config({ path: '.env'});

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || '';

if (MONGO_URL === '') {
    console.error('Please set MONGO_URL in .env');
    process.exit(1);
}

mongoose.connect(MONGO_URL)
.then((conn) => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });
    conn.connection.close();
}).catch((err) => {
    console.error('Error connecting to the database', err);
    process.exit(1);
});