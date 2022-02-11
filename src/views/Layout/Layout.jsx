import Header from './Header/Header';
import Footer from './Footer/Footer';
import './Layout.css';

export default function Layout({ children, toggleTheme }) {
  return (
    <div className="Layout">
      <Header toggleTheme={toggleTheme} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
