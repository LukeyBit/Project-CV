import express, { Request, Response } from 'express';
import { saveMessage } from '../controllers/dbController';
import { sendMessage } from '../controllers/mailController';


export interface ControllerResponse {
    success: boolean;
    message: string;
}

const router = express.Router();

router.post('/', async (req: Request, res: Response) =>{
    const dbRes: ControllerResponse = await saveMessage(req);
    const mailRes: ControllerResponse = sendMessage(req);

    if (dbRes.success && mailRes.success) {
        res.status(200).json({ message: 'Message sent and saved' });
    } else if (dbRes.success && !mailRes.success) {
        res.status(200).json({ message: 'Message saved' });
    } else if (!dbRes.success && mailRes.success) {
        res.status(200).json({ message: 'Message sent' });
    } else if (!dbRes.success && !mailRes.success) {
        res.status(500).json({ message: 'Message not sent or saved' });
    }
});

export default router;