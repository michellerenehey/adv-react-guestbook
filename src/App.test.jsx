import { render, screen } from '@testing-library/react';
import App from './App';
import { UserProvider } from './context/UserContext';
import { EntriesProvider } from './context/EntriesContext';
import { ThemeProvider } from './context/ThemeContext';
import userEvent from '@testing-library/user-event';

test('renders welcome message when signed in, user can sign yearbook', () => {
  render(
    <UserProvider>
      <EntriesProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </EntriesProvider>
    </UserProvider>
  );
  const header = screen.getByText(/~A vErY cOoL yEaRbOoK~/i);
  expect(header).toBeInTheDocument();

  const userNameField = screen.getByPlaceholderText(/enter username/i); 
  const passwordField = screen.getByPlaceholderText(/enter password/i); 
  const submitButton = screen.getByRole('button', { name: /submit/i })

  userEvent.type(userNameField, 'michellerenehey'); 
  userEvent.type(passwordField, '123456'); 
  userEvent.click(submitButton); 

  const pageHeader = screen.getByRole('heading', { name: 'Will you sign my yearbook?' });
  expect(pageHeader).toBeInTheDocument();

  const messageLabel = screen.getByText(/enter a message:/i);
  expect(messageLabel).toBeInTheDocument();

  const button = screen.getByRole('button', { name: /submit/i });
  expect(button).toBeInTheDocument();

  const messageInput = screen.getByPlaceholderText(/...message.../i);
  userEvent.type(messageInput, 'Have a good summer!');

  const signButton = screen.getByRole('button', { name: /submit/i });
  userEvent.click(signButton);

  const logoutButton = screen.getByRole('button', { name: /log out/i });

  expect(screen.getByText(/last signed by michellerenehey/i)).toBeInTheDocument();
  expect(screen.getByText(/have a good summer/i)).toBeInTheDocument();
  expect(screen.getByText(/xo, michellerenehey/i)).toBeInTheDocument();

  expect(logoutButton).toBeInTheDocument();
});
