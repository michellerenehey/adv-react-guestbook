import './App.css';
import Home from './views/Home/Home';
import Friends from './components/Friends/Friends';
import Layout from './views/Layout/Layout';
import Auth from './views/Auth/Auth';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/login">
              <Auth />
            </Route>
            <PrivateRoute exact path="/">
              <Home />
            </PrivateRoute>
            <PrivateRoute exact path="/friends">
              <Friends />
            </PrivateRoute>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
