import { Link } from "react-router-dom"

Link

function NavBarDesktop() {
  return (
    <nav className="tablet:flex gap-4 font-medium mobile:hidden">
        <Link to="/">About</Link>
        <Link to="/">Services</Link>
        <Link to="/">Portfolio</Link>
        <Link to="/">Contact Us</Link>
    </nav>
  )
}

export default NavBarDesktop