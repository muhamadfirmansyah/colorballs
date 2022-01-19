import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Saved from './pages/Saved';
import Notification from './pages/Notification';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/notification" element={<Notification />} />
    </Routes>
    </>
  );
}

export default App;
