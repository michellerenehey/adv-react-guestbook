import './Home.css';
import { useUser } from '../../context/UserContext';
import { useMessages } from '../../context/MessageContext';
import { useState } from 'react';

export default function Home() {
  const [newMessage, setNewMessage] = useState('');
  const [name, setName] = useState('');

  const { user, setUser } = useUser();
  const { messages, setMessages } = useMessages();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(name);
    setMessages([...messages, { name, note: newMessage }]);
    setNewMessage('');
  };

  console.log(messages);

  return (
    <div>
      <h1>Guestbook!</h1>
      <label>Enter Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <form onSubmit={handleSubmit}>
        <label>Enter a message:</label>
        <textarea value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
