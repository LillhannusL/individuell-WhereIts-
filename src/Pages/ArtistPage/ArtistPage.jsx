import { useParams } from "react-router-dom"
import "./ArtistPage.css"
import Navbar from "../../Components/Nav/Navbar"
import { useFetch } from "../../Hooks/useFetch"
import Artist from "../../Components/Artist/Artist"
import Counter from "../../Components/Counter/Counter"
import Button from "../../Components/Button/Button";

function ArtistPage() {
  const { id } = useParams()
  const { eventList, isLoading, isError } = useFetch();

  if (isLoading) return <section className="page"><p>Loading event info...</p></section>;
  if (isError) return <section className="page"><p>Error loading event info...!</p></section>;

  const event = eventList.find(e => e.id === id)
  if(!event) return <p>Event not found!</p>

  return (
    <section className="page artistpage">
      <h1>Event</h1>
      <Artist 
        event={event}
      />
      <Counter id={event.id} price={event.price}/>
      <Button text="Lägg i varukorgen"/>
      <Navbar />
    </section>
  )
}

export default ArtistPage