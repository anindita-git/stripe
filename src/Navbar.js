import React from 'react'
import { useGlobalContext } from './ContextAPI'
import { FaBars } from 'react-icons/fa';
import sublinks from './data';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()

  const displaySubmenu=(e)=>{
    //console.log(e.target.textContent);
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = ((tempBtn.left+tempBtn.right)/2);
    const bottom = tempBtn.bottom+5;
    openSubmenu(page,{center,bottom})
  }
  return (
    <nav className="navbar">
      <div className="main-container">
        <div className="nav-header">
          <h3>stripe</h3>
          <button className="toggle-btn" onClick={openSidebar}>
            <FaBars size={20} />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>Products</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>Developer</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>Company</button>
          </li>
        </ul>
        <button className="signIn-btn">Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar