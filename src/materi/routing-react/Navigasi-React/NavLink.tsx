import { Link, NavLink } from "react-router-dom";

<nav>
  <Link to="/">Home</Link> | 
  <NavLink 
    to={'/about'} className={({ isActive }) => isActive ? 'active' : ''}
    >Contact</NavLink>
    <Link to={'/contact'}>Contact</Link>
</nav>