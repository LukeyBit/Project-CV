import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '@/app/footer';

describe('Footer', () => {
    it('renders a footer', () => {
        render(<Footer />);
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });
    it('renders a footer with a link to my github', () => {
        render(<Footer />);
        expect(screen.getByRole('link')).toHaveAttribute(
        'href', 'https://github.com/LukeyBit');
    });
    it('renders a footer with a link to my github with the text @LukeyBit', () => {
        render(<Footer />);
        expect(screen.getByText('@LukeyBit')).toBeInTheDocument();
    });
});