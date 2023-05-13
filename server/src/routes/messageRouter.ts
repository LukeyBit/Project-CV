import express, { Request, Response } from 'express';
import { createTransport, SendMailOptions, Transporter } from 'nodemailer';
import { createMessage } from '../controllers/messageController.js';

const router = express.Router();

router.post('/', (req: Request, res: Response) => {
    createMessage(req);

    const transporter: Transporter = createTransport({
        host: process.env.SMTP_HOST || '',
        port: Number(process.env.SMTP_PORT) || 0,
        secure: true,
        auth: {
            user: process.env.OUT_EMAIL || '',
            pass: process.env.PASSWORD || '',
        }
    });

    const mailOptions: SendMailOptions = {
        from: process.env.OUT_EMAIL || '',
        to: process.env.IN_EMAIL || '',
        subject: `New message from ${req.body.firstName} ${req.body.lastName}`,
        text: `
            Name: ${req.body.firstName} ${req.body.lastName}
            Email: ${req.body.email}
            Message: ${req.body.message}
            `
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error(err);
            res.status(500).json({ success: false, message: 'Message not sent' });
        } else {
            console.log('Email sent:', info);
            res.status(200).json({ success: true, message: 'Message sent' });
        }
    });
});

export default router;