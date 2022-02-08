import './Guestbook.css';
import { useMessages } from '../../context/MessageContext';

export default function Guestbook() {
  const { messages } = useMessages();

  return (
    <div>
      {messages.map((message) => {
        return (
          <p key={message.note}>
            {message.note} from {message.name}
          </p>
        );
      })}
    </div>
  );
}
