import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
