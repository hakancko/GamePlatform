import React from 'react';
import "../css/Sidebar.css";

function Sidebar({ onSidebarClick }) {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => onSidebarClick(null)}>All Games</li>
        <li onClick={() => onSidebarClick(true)}>Installed</li>
        <li onClick={() => onSidebarClick(false)}>Not Installed</li>
      </ul>
    </div>
  );
}


export default Sidebar
