import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import ContactForm from '@/app/Contact/contactForm';

jest.mock('axios');

jest.mock('react-google-recaptcha', () => {
    return {
        __esModule: true,
        default: ({ onChange }: { onChange: (value: string) => void }) => {
            const handleChange = () => {
                onChange('test');
            };

            return <button data-testid='recaptcha' onClick={handleChange}>Verify</button>;
        },
    };
});

const useAlert = jest.fn(() => ({
    addAlert: jest.fn()
}));

afterEach(() => {
    jest.clearAllMocks();
});

describe('ContactForm', () => {
    it('calls axios.post when contactForm is submitted', async () => {
        const formData = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@example.com',
            message: 'Hello World!',
            token: 'test',
        };
        (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValue({ status: 200 });
        render(<ContactForm />);
        await userEvent.type(screen.getByLabelText(/first name/i), formData.firstName);
        await userEvent.type(screen.getByLabelText(/last name/i), formData.lastName);
        await userEvent.type(screen.getByLabelText(/email/i), formData.email);
        await userEvent.type(screen.getByLabelText(/message/i), formData.message);
        await userEvent.click(screen.getByTestId('recaptcha'));
        await userEvent.click(screen.getByRole('button', { name: /send/i }));
        expect(axios.post).toHaveBeenCalledWith(
            'not-a-real-url',
            formData,
        );
    });
    it('does not call axios.post when contactForm is submitted with empty fields but successfull captcha', async () => {
        (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValue({ status: 200 });
        render(<ContactForm />);
        await userEvent.click(screen.getByTestId('recaptcha'));
        await userEvent.click(screen.getByRole('button', { name: /send/i }));
        expect(axios.post).not.toHaveBeenCalled();
    })
    it('does not call axios.post when contactForm is submitted with empty fields but unsuccessfull captcha', async () => {
        (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValue({ status: 200 });
        render(<ContactForm />);
        await userEvent.click(screen.getByRole('button', { name: /send/i }));
        expect(axios.post).not.toHaveBeenCalled();
    });
});