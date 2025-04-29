import "./LandingPage.css"
import logo from "../../assets/logo.png"
function LandingPage() {
  return (
    <section className="page landingpage">
        <img className="landingpage__logo" src={logo} alt="logo"></img>
        <h1>Where It's @</h1>
        <h3>Ticketing made easy</h3>
    </section>
  )
}

export default LandingPage