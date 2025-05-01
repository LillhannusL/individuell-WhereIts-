import "./EventsPage.css"
import EventsListItem from "../../Components/EventListItem/EventsListItem";
import { useFetch } from "../../Hooks/useFetch"
import Navbar from "../../Components/Nav/Navbar";


function EventsPage() {
  const { eventList, isLoading, isError } = useFetch();

  if (isLoading) return <section className="page"><p>Loading events...</p></section>;
  if (isError) return <section className="page"><p>Error!</p></section>;

  return (
    <section className="page eventspage">
      <h1>Events</h1>
      <p>sök</p>
      <section className="eventspage__list">
        {
          eventList.map((event) => {
            return <EventsListItem
              key={event.id}
              event={event} />
          })
        }
      </section>
      <Navbar />
    </section>
  )
}

export default EventsPage;