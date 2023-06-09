import express, { Request, Response } from 'express';
import { saveMessage } from '../controllers/dbController';
import { sendMessage } from '../controllers/mailController';

export interface ControllerResponse {
    success: boolean;
    message: string;
}

const router = express.Router();

router.post('/', (req: Request, res: Response) => {
    if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    const mailRes: ControllerResponse = sendMessage(req);
    saveMessage(req)
        .then((dbRes: ControllerResponse) => {
            if (dbRes.success && mailRes.success) {
                return res.status(200).json({ message: 'Message sent and saved' });
            } 
            if (dbRes.success && !mailRes.success) {
                return res.status(200).json({ message: 'Message saved' });
            } 
            if (!dbRes.success && mailRes.success) {
                return res.status(200).json({ message: 'Message sent' });
            }
            if (!dbRes.success && !mailRes.success) {
                return res.status(500).json({ message: 'Message not sent or saved' });
            }
        })
        .catch((err: Error) => {
            console.error(err);
        });
});

export default router;
