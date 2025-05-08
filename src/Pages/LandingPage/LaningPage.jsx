import "./LandingPage.css"
import logo from "../../assets/logo.png"
import Navbar from "../../Components/Nav/Navbar"



function LandingPage() {
  return (
    <section className="page landingpage">
        <img className="landingpage__logo" src={logo} alt="a little man and some confetti"></img>
        <h1>Where It's @</h1>
        <h3>Ticketing made easy</h3>
        <Navbar />
    </section>
  )
}

export default LandingPage