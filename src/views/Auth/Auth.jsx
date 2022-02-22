import './Auth.css';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const { setUser } = useUser();
  // const location = useLocation();
  // const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === process.env.REACT_APP_AUTH_USERNAME) {
      console.log('yes');
    } else {
      console.log('nope');
    }
  };
  return (
    <div className="Auth">
      <form>
        <h1>Login</h1>
        <input
          type="email"
          value={email}
          placeholder="enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={password}
          placeholder="enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Submit</button>
      </form>
    </div>
  );
}
