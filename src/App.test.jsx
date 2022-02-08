import { render, screen } from '@testing-library/react';
import App from './App';
import { UserProvider } from './context/UserContext';
import { MessageProvider } from './context/MessageContext';

// TEST 1
test('renders renders header & entry fields on pageload', () => {
  render(
    <UserProvider>
      <MessageProvider>
        <App />
      </MessageProvider>
    </UserProvider>
  );
  const header = screen.getByText(/~A vErY cOoL yEaRbOoK~/i);
  expect(header).toBeInTheDocument();

  const pageHeader = screen.getByRole('heading', { name: 'Will you sign my yearbook?' });
  expect(pageHeader).toBeInTheDocument();

  const nameLabel = screen.getByText(/enter your name:/i);
  expect(nameLabel).toBeInTheDocument();

  const messageLabel = screen.getByText(/enter a message:/i);
  expect(messageLabel).toBeInTheDocument();

  const button = screen.getByRole('button', { name: /submit/i });
  expect(button).toBeInTheDocument();
});
