import { Link } from "react-router-dom"

function NavBarDesktop() {
  return (
    <nav className="tablet:flex gap-4 font-medium mobile:hidden">
        <Link className="hover:text-green-700" to="/">About</Link>
        <Link className="hover:text-green-700" to="/">Services</Link>
        <Link className="hover:text-green-700" to="/">Portfolio</Link>
        <Link className="hover:text-green-700" to="/">Contact Us</Link>
    </nav>
  )
}

export default NavBarDesktop