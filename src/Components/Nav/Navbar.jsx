import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <footer className="footer">
        <nav className="navbar">
            <Link to='/' className="link">
                <i className="fa-solid fa-house fa-2xl"></i>
                <h2>Home</h2>
            </Link>
            <Link to='/events' className="link">
                <i className="fa-solid fa-calendar-days fa-2xl"></i>
                <h2>Events</h2>
            </Link>
            <Link to='/order' className="link">
                <i className="fa-solid fa-cart-shopping fa-2xl"></i>
                <h2>Varukorg</h2>
            </Link>
            <Link to='/tickets' className="link">
                <i className="fa-solid fa-ticket fa-2xl"></i>
                <h2>Biljetter</h2>
            </Link>

        </nav>
    </footer>
  )
}

export default Navbar