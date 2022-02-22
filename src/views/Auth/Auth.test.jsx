import {render, screen, waitFor} from '@testing-library/react'; 
import {MemoryRouter, Route, Switch} from 'react-router-dom'
import { UserProvider } from '../../context/UserContext';
import { EntriesProvider } from '../../context/EntriesContext';
import { ThemeProvider } from '../../context/ThemeContext';
import Auth from './Auth.jsx'; 
import Home from '../Home/Home.jsx'; 
import userEvent from '@testing-library/user-event'; 

test('user can login', async () => {
    const {container} = render(
    <UserProvider>
      <EntriesProvider>
        <ThemeProvider>
            <MemoryRouter initialEntries={["/login"]}>
                <Switch>
                    <Route exact path="/login">
                        <Auth />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </MemoryRouter>
        </ThemeProvider>
      </EntriesProvider>
    </UserProvider>
    ); 

    expect(container).toMatchSnapshot();

    const userNameField = screen.getByPlaceholderText(/enter username/i); 
    const passwordField = screen.getByPlaceholderText(/enter password/i); 
    const submitButton = screen.getByRole('button', { name: /submit/i })

    userEvent.type(userNameField, 'michellerenehey'); 
    userEvent.type(passwordField, '123456'); 
    userEvent.click(submitButton); 

    return waitFor(() => {
        screen.getByRole('heading', { name: /will you sign my yearbook\?/i })
    })
}); 