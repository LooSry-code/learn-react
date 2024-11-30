import { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'

type LayoutProps = {
  children: ReactNode;
}
const Layout = ({children}: LayoutProps) => {
  return (
    <div>
      <nav>
          <Link to="/">Home</Link> |
          <NavLink to="/about" className={({ isActive }) => isActive ? 'bg-red-500' : 'bg-green-500'}>About</NavLink> |
          <Link to="/contact">Contact</Link> |
          <Link to="/product/:productId">Products</Link> | 
          <Link to="/tentang">Tentang</Link>
        </nav>
        <main>
          {children}
        </main>
    </div>
  )
}

export default Layout
