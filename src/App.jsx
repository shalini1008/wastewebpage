import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Scheduling from './scheduling';
import CongestedForm from './Carousel/congestedform';
import NonCongestedForm from './Carousel/noncongestedform';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scheduling" element={<Scheduling />} />
          <Route path="/congestedform" element={<CongestedForm />} />
          <Route path="/noncongestedform" element={<NonCongestedForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

