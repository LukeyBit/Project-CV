import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import Contact from '@/app/Contact/page';

jest.mock('axios');

const useAlert = jest.fn(() => ({
    addAlert: jest.fn()
}));

describe('Contact', () => {
    it('renders contact form and alert container', () => {
        render(<Contact />);
        expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
        expect(screen.getByTestId('alert-container')).toBeInTheDocument();
    });
    it('calls axios.post on form submit and renders an alert', async () => {
        const formData = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@example.com',
            message: 'Hello World!',
        };
        (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValue({ status: 200 });
        render(<Contact />);
        await userEvent.type(screen.getByLabelText(/first name/i), formData.firstName);
        await userEvent.type(screen.getByLabelText(/last name/i), formData.lastName);
        await userEvent.type(screen.getByLabelText(/email/i), formData.email);
        await userEvent.type(screen.getByLabelText(/message/i), formData.message);
        await userEvent.click(screen.getByRole('button', { name: /send/i }));
        expect(axios.post).toHaveBeenCalledWith(
            'http://localhost:5000/message',
            formData,
        );
        expect(screen.getByRole('alert')).toBeInTheDocument();
        expect(screen.getByText(/message sent/i)).toBeInTheDocument();
    });
});