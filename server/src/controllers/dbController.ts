import { Request } from 'express';
import Message, { IMessage } from '../schemas/messageSchema';
import { ControllerResponse } from '../routes/messageRouter';

async function saveMessage(req: Request): Promise<ControllerResponse> {
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
        return { success: true, message: 'Message saved' };
    } catch (err: any) {
        return { success: false, message: err.message };
    }
}

export { saveMessage };