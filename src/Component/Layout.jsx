import Navbar from './Header';
import Footer from './Footer';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
export default Layout;
