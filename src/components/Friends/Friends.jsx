import './Friends.css';
import { useUser } from '../../context/UserContext';

export default function Friends() {
  const { user } = useUser();
  console.log(user);
  return (
    <div>
      <p>Whose yearbook do I need to sign?</p>
      <p>{user}</p>
    </div>
  );
}
