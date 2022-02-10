import './Home.css';
import { useUser, useUserArray } from '../../context/UserContext';
import { useMessages } from '../../context/MessageContext';
import { useState } from 'react';
import Guestbook from '../../components/Guestbook/Guestbook';
import signature from '../../assets/signature.png';
import { addSubmission } from '../../services/entries';

export default function Home() {
  const [newMessage, setNewMessage] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
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

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setUser(name);
      let today = new Date();
      setMessages([...messages, { name, message: newMessage, id: today.getSeconds() }]);
      await addSubmission(name, newMessage);
      setNewMessage('');
      setUserArray([...userArray, { name: name, id: today.getSeconds() }]);
    } catch {
      setErrorMessage('Oh no! Something went wrong!');
    }
  };

  return (
    <div className="Home">
      {errorMessage && <p>{errorMessage}</p>}
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
