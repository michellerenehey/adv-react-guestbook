import './Home.css';
import { useUser, useUserArray } from '../../context/UserContext';
import { useMessages } from '../../context/MessageContext';
import { useState } from 'react';
import Guestbook from '../../components/Guestbook/Guestbook';

export default function Home() {
  const [newMessage, setNewMessage] = useState('');
  const [name, setName] = useState('');
  const { user, setUser } = useUser();
  const { messages, setMessages } = useMessages();
  const { userArray, setUserArray } = useUserArray();

  console.log(userArray);

  // how to use a useEffect without a data call:
  // import useEffet
  // make a state: const [shouldSubmit, setShouldSubmit] = useState(false);
  // useEffect(() => {
  //   if (shouldSubmit) {
  //     let today = new Date();
  //     setUserArray([...userArray, { name: name, id: today.getSeconds() }]);
  //     setShouldSubmit(false);
  //   }
  // }, [shouldSubmit]);
  // then in the handlesubmit, setShouldSubmit(true)

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(name);
    let today = new Date();
    setMessages([...messages, { name, note: newMessage, id: today.getSeconds() }]);
    setNewMessage('');
    setUserArray([...userArray, { name: name, id: today.getSeconds() }]);
  };

  return (
    <div className="Home">
      <h1>Will you sign my yearbook?</h1>
      <div className="guestbook">
        <div className="guestbook-entry">
          <form onSubmit={handleSubmit}>
            {!user && (
              <div className="guestbook-name">
                <label>Enter your name:</label>
                <input
                  value={name}
                  placeholder="...name..."
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <label>Enter a message:</label>
            <textarea
              value={newMessage}
              placeholder="...message..."
              onChange={(e) => setNewMessage(e.target.value)}
            />
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
