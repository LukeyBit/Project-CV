import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../Navbar';

describe('Navbar', () => {
    it('renders a navbar', () => {
        render(<Navbar />);
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
    it('renders a navbar with a link to each of the pages with the text Portfolio, Resume, and Contact', () => {
        render(<Navbar />);
        expect(screen.getByText('Portfolio')).toBeInTheDocument();
        expect(screen.getByText('Resume')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
    });
    it('renders the links with the correct hrefs', () => {
        render(<Navbar />);
        expect(screen.getByText('Portfolio')).toHaveAttribute('href', '/Portfolio');
        expect(screen.getByText('Resume')).toHaveAttribute('href', '/Resume');
        expect(screen.getByText('Contact')).toHaveAttribute('href', '/Contact');
    });
    it('renders a navbar with a link to the home page with the text Lukas Andersson', () => {
        render(<Navbar />);
        expect(screen.getByText('Lukas Andersson')).toBeInTheDocument();
        expect(screen.getByText('Lukas Andersson')).toHaveAttribute('href', '/');
    });
});