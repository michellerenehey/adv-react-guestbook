import Header from './Header/Header';
import Footer from './Footer/Footer';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
