import "./ArtistPage.css"
import { useParams } from "react-router-dom"
import { useFetch } from "../../Hooks/useFetch"
import { useState, useEffect } from "react"
import { useLocalStorageCart } from "../../Hooks/useLocalStorageCart"
import useCartStore from "../../Store/UseCartStore"
import Navbar from "../../Components/Nav/Navbar"
import Artist from "../../Components/Artist/Artist"
import Counter from "../../Components/Counter/Counter"
import Button from "../../Components/Button/Button";

function ArtistPage() {
  const [event, setEvent] = useState(null)
  const { eventList, isLoading, isError } = useFetch()
  const { id } = useParams()
  const { tickets, addTickets, removeTickets } = useLocalStorageCart()
  const { counts, reset } = useCartStore()

  useEffect(() => {
    if(id && eventList) {
      const found = eventList.find(e => e.id === id)
      setEvent(found)
    }
  }, [id, eventList])


  return (
    <section className="page artistpage">
      {
        event ? (
          <>
            <h1>Event</h1>
            <h4>You are about to score some tickets to</h4>
            <Artist event={event} />
            <Counter id={event.id} price={event.price} className="counter"/>
            <Button 
            onClick={() => {
              const ticketCount = counts[event.id] || 0 
              if(ticketCount > 0) {
                addTickets({...event, quantity: ticketCount})
                reset()
              }}
              }
            text="Lägg i varukorgen"/>
            <Navbar />
          </>
        ): null }
    </section>
  )
}

export default ArtistPage