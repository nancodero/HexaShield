// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HexaShield title', () => {
    render(<App />);
    const titleElement = screen.getByText(/HexaShield/i);
    expect(titleElement).toBeInTheDocument();
});
