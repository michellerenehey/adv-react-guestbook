import './Header.css';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();
  return <div>hello there, {user}</div>;
}
