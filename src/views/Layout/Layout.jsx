import Header from './Header/Header';
import Footer from './Footer/Footer';
import './Layout.css';

export default function Layout({ children, toggleTheme, theme }) {
  return (
    <div className="Layout">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
