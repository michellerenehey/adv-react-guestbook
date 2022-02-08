import './Header.css';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();
  return (
    <div className="Header">{user ? <p>hello there, {user}</p> : <p>hello there, old pal</p>}</div>
  );
}
