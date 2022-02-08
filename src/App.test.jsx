import { render, screen } from '@testing-library/react';
import App from './App';
import { UserProvider } from './context/UserContext';
import { MessageProvider } from './context/MessageContext';
import userEvent from '@testing-library/user-event';

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

// TEST 2
test('user can type name and message, name shows up in header, message on page, and new friend button appears', () => {
  render(
    <UserProvider>
      <MessageProvider>
        <App />
      </MessageProvider>
    </UserProvider>
  );

  const nameInput = screen.getByPlaceholderText(/..name.../i);
  userEvent.type(nameInput, 'Michelle');

  const messageInput = screen.getByPlaceholderText(/...message.../i);
  userEvent.type(messageInput, 'Have a good summer!');

  const submitButton = screen.getByRole('button', { name: /submit/i });
  userEvent.click(submitButton);

  const friendButton = screen.getByRole('button', { name: /not michelle?/i });

  expect(screen.getByText(/last signed by michelle/i)).toBeInTheDocument();
  expect(screen.getByText(/have a good summer/i)).toBeInTheDocument();
  expect(screen.getByText(/xo, michelle/i)).toBeInTheDocument();
  expect(friendButton).toBeInTheDocument();
});
