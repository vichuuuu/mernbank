
import './App.css';
import Loging from './components/Loging';
import Registration from './components/Registration'
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
   <Router>
      <Routes>
        <Route path="/" element={<Loging />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard/>}  />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
