import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Register from '../../pages/Register';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Sign In Page', () => {
  it('should be able to signin', async () => {
    const { getByTestId, getByText } = render(<Register />);

    const name = getByTestId('input-name');
    const email = getByTestId('input-email');
    const password = getByTestId('input-password');
    const button = getByText('Sign In');

    fireEvent.change(name, { target: { value: 'John Doe' } });
    fireEvent.change(email, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(password, { target: { value: '12a6161895' } });

    fireEvent.click(button);

    await waitFor(() => expect(getByTestId('modal-register')));
  });

  it('should not be able to register with invalid credentials', async () => {
    const { getAllByTestId, getByTestId, getByText } = render(<Register />);

    const name = getByTestId('input-name');
    const email = getByTestId('input-email');
    const password = getByTestId('input-password');
    const button = getByText('Sign In');

    fireEvent.change(name, { target: { value: '' } });
    fireEvent.change(email, { target: { value: 'not-email-valid' } });
    fireEvent.change(password, { target: { value: '123' } });

    fireEvent.click(button);

    await waitFor(() =>
      expect(getAllByTestId('input-error')).not.toHaveLength(0),
    );
  });
});
