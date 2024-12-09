import './App.css';
import Sidebar from './components/Sidebar.js';
import Header from './components/Header.js';
import BoxesContent from './components/BoxesContent.js';
import React, { useState } from 'react';

const boxes = [
  { image: "game-images/apex legen.jpeg", name: "Apex Legends", installed: true },
  { image: "game-images/cs2.jpeg", name: "CS2", installed: true },
  { image: "game-images/cyberpunk.jpeg", name: "Cyberpunk 2077", installed: true },
  { image: "game-images/dota2.jpeg", name: "Dota 2", installed: true },
  { image: "game-images/elden ring.jpeg", name: "Elden Ring", installed: true },
  { image: "game-images/fc24.jpeg", name: "FIFA 24", installed: false },
  { image: "game-images/gta5.jpeg", name: "GTA V", installed: false },
  { image: "game-images/h1z1.jpeg", name: "H1Z1", installed: false },
  { image: "game-images/lostark.jpeg", name: "Lost Ark", installed: false },
  { image: "game-images/pubg.jpeg", name: "PUBG", installed: false },
  { image: "game-images/rdr2.jpeg", name: "Red Dead Redemption 2", installed: false },
  { image: "game-images/resident evil 5.jpeg", name: "Resident Evil 5", installed: false },
];

const App = () => {
  const [filter, setFilter] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSidebarClick = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  let title = 'All Games';
  let filteredBoxCount = boxes.length;

  if (filter === true) {
    title = 'Installed Games';
    filteredBoxCount = boxes.filter(box => box.installed).length;
  } else if (filter === false) {
    title = 'Not Installed Games';
    filteredBoxCount = boxes.filter(box => !box.installed).length;
  }

  return (
    <div className="App">
      <Sidebar onSidebarClick={handleSidebarClick} />
      <div className="main-container">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
        <h1>{title} ({filteredBoxCount})</h1>
        <BoxesContent filter={filter} searchTerm={searchTerm} games={boxes} />
      </div>
    </div>
  );
};

export default App;
