import './App.css';
import Suspensions from './pages/suspensions';
import Electricity from './pages/electricity';

import { useState } from 'react';
import { Button } from '@mui/material';

function App() {

  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page) => {
    setCurrentPage(page)
  };

  return (
    <div className="App">
      <Button
        onClick={() => handleNavigation("home")}
        style={{
          color: 'black'
        }}
      >
        Home
      </Button>
      <Button
        onClick={() => handleNavigation("electricity")}
        style={{
          color: 'black'
        }}
      >
        Electricity
      </Button>
      {currentPage === "home" && <Suspensions />}
      {currentPage === "electricity" && <Electricity />}
    </div>
  );
}

export default App;
