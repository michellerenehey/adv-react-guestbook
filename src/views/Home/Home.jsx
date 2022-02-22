import './Home.css';
import { useUser, useUserArray } from '../../context/UserContext';
import { useEntries } from '../../context/EntriesContext';
import { useState } from 'react';
import Guestbook from '../../components/Guestbook/Guestbook';
import signature from '../../assets/signature.png';

export default function Home() {
  const [newMessage, setNewMessage] = useState('');
  const { user, setUser } = useUser();
  const { entries, setEntries } = useEntries();
  const { userArray, setUserArray } = useUserArray();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setUser(name);
    let today = new Date();
    setEntries([...entries, { name: user.username, note: newMessage, id: today.getSeconds() }]);
    setNewMessage('');
    setUserArray([...userArray, { name: user.username, id: today.getSeconds() }]);
  };

  return (
    <div className="Home">
      <div className="book-header">
        <img className="signature" src={signature} alt="icon of pen" />
        <h3>Will you sign my yearbook?</h3>
        <img className="signature" src={signature} alt="icon of pen" />
      </div>
      <div className="book-outer">
        <div className="book-inner">
          <form onSubmit={handleSubmit}>
            <div className="book-message">
              <label>Enter a message: </label>
              <textarea
                value={newMessage}
                placeholder="...message..."
                onChange={(e) => setNewMessage(e.target.value)}
              />
            </div>
            <div className="submit-button">
              <button type="submit">Submit</button>
              {user.username && (
                <button
                  onClick={() => {
                    setUser('');
                    // make a logout here
                  }}
                >
                  LOG OUT
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <Guestbook />
    </div>
  );
}
