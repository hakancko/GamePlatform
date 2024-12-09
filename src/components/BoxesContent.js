import React from 'react';
import Box from './Box';

const filterBoxes = (games, filter, searchTerm) => {
  return games.filter(box => {
    const matchesFilter = filter === null || (filter === true ? box.installed : !box.installed);
    const matchesSearch = searchTerm === '' || box.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });
};

const BoxesContent = ({ games, filter, searchTerm }) => {
  const filteredBoxes = filterBoxes(games, filter, searchTerm);

  return (
    <div className="content">
      {
        filteredBoxes.map((box, index) => (
          <Box
            key={index}
            image={box.image}
            name={box.name}
            installed={box.installed}
          />
        ))
     
      }
    </div>
  );
};

export default BoxesContent;
