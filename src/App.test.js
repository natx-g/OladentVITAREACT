
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('should render Login component when no user is authenticated', () => {
    render(<App />);
    const loginElement = screen.getByText(/Login/);
    expect(loginElement).toBeInTheDocument();
  });

  it('should render Home component when user is authenticated', () => {
   
    const mockUser = { email: 'test@example.com' };
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({ json: () => Promise.resolve(mockUser) });

    render(<App />);
    const homeElement = screen.getByText(/Bienvenido usuario/i);
    expect(homeElement).toBeInTheDocument();
  });
});
