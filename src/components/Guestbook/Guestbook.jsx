import './Guestbook.css';
import { useEntries } from '../../context/EntriesContext';

export default function Guestbook() {
  const { entries } = useEntries();
  return (
    <div className="Guestbook">
      {entries.map((entry) => {
        return (
          <div key={entry.id} className="entry">
            <p className="message">{entry.note}</p>
            <p className="name">xo, {entry.name}</p>
          </div>
        );
      })}
    </div>
  );
}
