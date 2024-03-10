import './App.css';
import Suspensions from './pages/suspensions';
import Electricity from './pages/electricity';
import Home from './pages/home';

import { useState } from 'react';
import { Button } from '@mui/material';

function App() {

  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page) => {
    setCurrentPage(page)
  };

  return (
    <div className="App">
      <div className='nav-wrapper'>
        <h3
          style={{
            margin: '5px',
          }}
        >
          Pages
        </h3>
        <Button
          onClick={() => handleNavigation("home")}
          className='nav-buttons'
        >
          Home
        </Button>
        <Button
          onClick={() => handleNavigation("suspensions")}
          className='nav-buttons'
        >
          Suspensions
        </Button>
        <Button
          onClick={() => handleNavigation("electricity")}
          className='nav-buttons'
        >
          Electricity
        </Button>
      </div>
      {currentPage === "home" && <Home />}
      {currentPage === "suspensions" && <Suspensions />}
      {currentPage === "electricity" && <Electricity />}
    </div>
  );
}

export default App;
