import { useState, useEffect } from "react"
import "./TicketsPage.css"
import Ticket from "../../Components/Ticket/Ticket"
import Nav from "../../Components/Nav/Navbar"

function TicketsPage() {
  const [boughtTickets, setBoughtTickets] = useState([])

  useEffect(() => {
    const tickets = JSON.parse(localStorage.getItem('boughtTickets')) || []
    setBoughtTickets(tickets)   
  }, [])

  console.log(boughtTickets)

  return (
    <section className="page tickespage">
      <ul className="ticketList">
      {
        boughtTickets.length > 0 ?
        boughtTickets.map((event) => {
          return <Ticket 
          key={event.id}
          event={event}/>
        })
        : <p>Inga köpta biljetter</p>
      }
      </ul>
      <Nav />
    </section>
  )
}

export default TicketsPage