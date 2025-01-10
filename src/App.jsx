import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product';
import SnapNsell from './pages/snapNsell/SnapNsell';
// import Login from './pages/Login'
// import Signup from './pages/Signup'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Product/>}/>
          <Route path="/snapNsell" element={<SnapNsell/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
