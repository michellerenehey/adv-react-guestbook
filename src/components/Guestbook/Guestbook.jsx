import './Guestbook.css';
import { useMessages } from '../../context/MessageContext';

export default function Guestbook() {
  const { messages } = useMessages();

  return (
    <div className="Guestbook">
      {messages.map((message) => {
        return (
          <div key={message.id} className="entry">
            <p className="message">{message.message}</p>
            <p className="name">xo, {message.name}</p>
          </div>
        );
      })}
    </div>
  );
}
