import './Home.css';
import { useUser } from '../../context/UserContext';
import { useMessages } from '../../context/MessageContext';
import { useState } from 'react';
import Friends from '../../components/Friends/Friends';

export default function Home() {
  const [newMessage, setNewMessage] = useState('');
  const [name, setName] = useState('');
  const { user, setUser } = useUser();
  const { messages, setMessages } = useMessages();
  const [userArray, setUserArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(name);
    let today = new Date();
    setMessages([...messages, { name, note: newMessage, id: today.getSeconds() }]);
    setNewMessage('');
    setUserArray([...userArray, { name: name, id: today.getSeconds() }]);
  };
  console.log(userArray);
  return (
    <div className="Home">
      <h1>Will you sign my yearbook?</h1>
      <div className="guestbook">
        <div className="guestbook-name">
          <label>Enter your name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="guestbook-entry">
          <form onSubmit={handleSubmit}>
            <label>Enter a message:</label>
            <textarea value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
            <div className="submit-button">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <Friends userArray={userArray} />
    </div>
  );
}
