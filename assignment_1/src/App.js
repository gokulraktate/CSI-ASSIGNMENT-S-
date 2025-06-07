import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserForm from './components/UserForm';
import SubmittedData from './components/SubmittedData';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/submitted" element={<SubmittedData />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
