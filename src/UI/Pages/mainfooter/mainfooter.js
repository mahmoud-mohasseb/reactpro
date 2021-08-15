import React from 'react';
import './mainfooter.css';
// import { Link } from 'react-router-dom';
const Mainfooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
};

export default Mainfooter;
