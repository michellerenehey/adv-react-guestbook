import './Header.css';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();
  return <div className="Header">hello there, {user}</div>;
}
