import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import ContactForm from '@/app/Contact/contactForm';

jest.mock('axios');

const useAlert = jest.fn(() => ({
    addAlert: jest.fn()
}));

describe('ContactForm', () => {
    it('calls axios.post when contactForm is submitted', async () => {
        const formData = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@example.com',
            message: 'Hello World!',
        };
        (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValue({ status: 200 });
        render(<ContactForm />);
        await userEvent.type(screen.getByLabelText(/first name/i), formData.firstName);
        await userEvent.type(screen.getByLabelText(/last name/i), formData.lastName);
        await userEvent.type(screen.getByLabelText(/email/i), formData.email);
        await userEvent.type(screen.getByLabelText(/message/i), formData.message);
        await userEvent.click(screen.getByRole('button', { name: /send/i }));
        expect(axios.post).toHaveBeenCalledWith(
            'not-a-real-url',
            formData,
        );
    });
});