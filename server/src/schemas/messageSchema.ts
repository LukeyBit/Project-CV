import mongoose, { Document } from 'mongoose';

const messageSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true},
    timestamp: {type: Date, default: Date.now(), required: true},
});

export interface IMessage extends Document {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    timestamp: Date;
}

const Message = mongoose.model<IMessage>('Message', messageSchema);

export default Message;