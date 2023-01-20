import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

import './NavBar.css';

function NavBar() {
  return (
    <div className='nav'>
        <div className="logo">
          <img src="images/logo.png" alt=" Website Logo" />
        </div>
        <div className="search">
        <input type="text" />
        <div className="searchIcon">
          <SearchIcon />
        </div>
        </div>
        <div className="cartIcon">
        <ShoppingCartIcon style={{fontSize:"2rem"}}/>
        </div>
    </div>
  )
}

export default NavBar