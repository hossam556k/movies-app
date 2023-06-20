import logo from './logo.svg';
import './App.css';
import Headr from './components/Headr';
import {BrowserRouter as  Router, Routes,Route } from 'react-router-dom';
import Watchlist from './components/Watchlist';
import Watched from './components/Watched';
import Add from './components/Add';
import ContextProvider, { GlobalContext } from './components/context/GlobalContext';

function App() {
  
  return (

  <Router>
  <ContextProvider>
    <Headr/>
    <Routes>
      <Route path="/" element={<Watchlist/>}/>
      <Route path="/watched" element={<Watched/>}/>
      <Route path="/Add" element={<Add/>}/>
    </Routes>
    </ContextProvider>
  </Router>

  );
}

export default App;
