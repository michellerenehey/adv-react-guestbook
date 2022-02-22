import {render} from '@testing-library/react'; 
import {MemoryRouter, Route, Switch} from 'react-router-dom'
import { UserProvider } from '../../context/UserContext';
import { EntriesProvider } from '../../context/EntriesContext';
import { ThemeProvider } from '../../context/ThemeContext';
import Auth from './Auth.jsx'; 
import Home from '../Home/Home.jsx'; 

test('user can login', async () => {
    const {container} = render(
    <UserProvider>
      <EntriesProvider>
        <ThemeProvider>
            <MemoryRouter>
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
})