import './Home.css';
import { useUser, useUserArray } from '../../context/UserContext';
import { useMessages } from '../../context/MessageContext';
import { useState } from 'react';
import Guestbook from '../../components/Guestbook/Guestbook';
import signature from '../../assets/signature.png';

export default function Home() {
  const [newMessage, setNewMessage] = useState('');
  const [name, setName] = useState('');
  const { user, setUser } = useUser();
  const { messages, setMessages } = useMessages();
  const { userArray, setUserArray } = useUserArray();

  // add loading state?
  // useEffect(() => {
  //   if (user.name) {
  //     setLoading(false)
  //   } else {
  //     setLoading(true)
  //   }
  // }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser(name);
    let today = new Date();
    setMessages([...messages, { name, note: newMessage, id: today.getSeconds() }]);
    setNewMessage('');
    setUserArray([...userArray, { name: name, id: today.getSeconds() }]);
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
            {!user && (
              <div className="book-name">
                <label>Enter your name: </label>
                <input
                  value={name}
                  placeholder="...name..."
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
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
              {user && (
                <button
                  onClick={() => {
                    setUser(''), setName('');
                  }}
                >
                  Not {user}?
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
