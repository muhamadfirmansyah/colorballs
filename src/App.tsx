import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Saved from './pages/Saved';
import SavedDetail from './pages/Saved/detail';
import Notification from './pages/Notification';
import Content from './pages/Content';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/saved" element={<Saved />} />
        <Route path="/saved/:id" element={<SavedDetail />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/content" element={<Content />} />
    </Routes>
    </>
  );
}

export default App;
