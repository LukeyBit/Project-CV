import { Request } from 'express';
import Message, { IMessage } from '../schemas/messageSchema.js';

async function createMessage(req: Request): Promise<object>{
    try {
        const { firstName, lastName, email, message }: any = req.body;
        const newMessage: IMessage = new Message({
            firstName,
            lastName,
            email,
            message,
            timestamp: Date.now(),
        });
        await newMessage.save();
        return { success: true, message: 'Message sent' };
    } catch (err: any) {
        console.error(err);
        return { success: false, message: err.message };
    }
}

export { createMessage };