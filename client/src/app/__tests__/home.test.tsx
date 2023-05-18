import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '@/app/page';

describe('Home', () => {
    it('renders a main element', () => {
        render(<Home />);
        expect(screen.getByRole('main')).toBeInTheDocument();
    });
    it('renders a main element with a flexbox', () => {
        render(<Home />);
        expect(screen.getByRole('main')).toHaveClass('flex');
    });
    it('renders a main element with a flexbox with a minimum height of 100vh', () => {
        render(<Home />);
        expect(screen.getByRole('main')).toHaveClass('min-h-screen');
    });
});