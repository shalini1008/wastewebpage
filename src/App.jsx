import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Scheduling from './scheduling';
import CongestedForm from './Carousel/congestedform';
import './App.css'
import Product from './pages/Product';
import SnapNsell from './pages/snapNsell/SnapNsell';
import Education from './pages/Edu';
import Signup from './pages/Registration/Signup';
import Login from './pages/Registration/Login';
import UserProfile from './pages/User/UserProfile';
import History from './pages/User/History';
import NonCongestedForm from './pages/NonCongestedForm';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Scheduling />} />
          <Route path="/congestedform" element={<CongestedForm />} />
          <Route path="/noncongestedform" element={<NonCongestedForm/>} />
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Product/>}/>
          <Route path="/snapNsell" element={<SnapNsell/>}/>
          <Route path="/profile" element={<UserProfile/>}/>
          <Route path="/profileHistory" element={<History/>}/>
          <Route path="/Education" element={<Education />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/contactus" element={<Contact/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

