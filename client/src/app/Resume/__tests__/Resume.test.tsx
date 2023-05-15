import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Resume from '../page';

describe('Resume', () => {
    it('renders a main element', () => {
        render(<Resume />);
        expect(screen.getByRole('main')).toBeInTheDocument();
    });
    it('renders a main element with a flexbox', () => {
        render(<Resume />);
        expect(screen.getByRole('main')).toHaveClass('flex');
    });
    it('renders a main element with a flexbox with a minimum height of 100vh', () => {
        render(<Resume />);
        expect(screen.getByRole('main')).toHaveClass('min-h-screen');
    });
});