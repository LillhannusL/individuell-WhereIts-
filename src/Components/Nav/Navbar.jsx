import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <footer className="footer">
        <nav className="navbar">
            <Link to='/' className="link">
                <h2>Home</h2>
            </Link>
            <Link to='/events' className="link">
                <h2>Events</h2>
            </Link>
            <Link to='/order' className="link">
                <h2>Varukorg</h2>
            </Link>

        </nav>
    </footer>
  )
}

export default Navbar