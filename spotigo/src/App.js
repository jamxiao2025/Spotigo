import logo from './logo.svg';
import './App.css';
import Login from'./pages/login'
import Dashboard from './pages/dashboard'
import Register from './pages/register'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Login />} />
        <Route path="/register" element = {<Register />} />
        <Route path="/dashboard" element = {<Dashboard />} />

      </Routes>
    </Router>
  );
}

export default App;