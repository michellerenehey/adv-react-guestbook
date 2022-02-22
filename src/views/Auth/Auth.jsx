import './Auth.css';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Auth() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { setUser } = useUser();
  const location = useLocation();
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      username === process.env.REACT_APP_AUTH_USERNAME &&
      password === process.env.REACT_APP_AUTH_PASSWORD
    ) {
      setUser({ username });
      const { from } = location.state || { from: { pathname: '/' } };
      history.replace(from.pathname);
    } else {
      setError('Wrong credentials, try again!');
    }
  };
  return (
    <div className="Auth">
      <form>
        <h1>Login</h1>
        <input
          type="email"
          value={username}
          placeholder="enter email"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          value={password}
          placeholder="enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Submit</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
