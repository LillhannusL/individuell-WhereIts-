import "./EventsPage.css"
import EventsList from "../../Components/EventList/EventsList";
import { useFetch } from "../../Hooks/useFetch"

function EventsPage() {
  const { eventList, isLoading, isError } = useFetch('https://santosnr6.github.io/Data/events.json');

  if (isLoading) return <section className="page"><p>Loading...</p></section>;
  if (isError) return <section className="page"><p>Error!</p></section>;

  return (
    <section className="page eventspage">
      <h1>Events</h1>
      <p>sök</p>
      {
        eventList.map((event) => {
          return <EventsList
            key={event.id}
            event={event} />
        })
      }

    </section>
  )
}

export default EventsPage;