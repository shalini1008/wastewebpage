import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Scheduling from './scheduling';
import CongestedForm from './Carousel/congestedform';
import NonCongestedForm from './Carousel/noncongestedform';
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product';
import SnapNsell from './pages/snapNsell/SnapNsell';
// import UserProfile from './pages/user/UserProfile';
// import History from './pages/user/History';
import Education from './pages/Edu';
import Signup from './pages/Registration/Signup';
import Login from './pages/Registration/Login';
// import Login from './pages/Login'
// import Signup from './pages/Signup'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scheduling" element={<Scheduling />} />
          <Route path="/congestedform" element={<CongestedForm />} />
          <Route path="/noncongestedform" element={<NonCongestedForm />} />
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Product/>}/>
          <Route path="/snapNsell" element={<SnapNsell/>}/>
          {/* <Route path="/profile" element={<UserProfile/>}/>
          <Route path="/profileHistory" element={<History/>}/> */}
          <Route path="/Education" element={<Education />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

