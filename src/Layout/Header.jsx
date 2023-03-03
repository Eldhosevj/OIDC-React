import React from 'react';
import { json, Link } from 'react-router-dom';

 const Header  = () => {
  return(<header>
    App
    <nav style={{display:"flex",justifyContent:"space-between"}}>
      <Link to="/">Home</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  </header>);
};
export default Header