import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReadMore from './pages/ReadMore';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/read-more/:projectName" element={<ReadMore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
