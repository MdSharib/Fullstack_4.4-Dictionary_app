
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Components/Home';
import History from './Components/History';

function App() {
  return (
   <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/history' element={<History />} />
    </Routes>
  );
}

export default App;
