// TODO Unit test for contactForm

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '@/app/Contact/page';

jest.mock('axios');

describe('Contact', () => {
    it('renders a main element', () => {
        render(<Contact />);
        expect(screen.getByRole('main')).toBeInTheDocument();
    });
    it('renders a main element with a flexbox', () => {
        render(<Contact />);
        expect(screen.getByRole('main')).toHaveClass('flex');
    });
    it('renders a main element with a flexbox with a minimum height of 100vh', () => {
        render(<Contact />);
        expect(screen.getByRole('main')).toHaveClass('min-h-screen');
    });
});