import "./EventsList.css"

function EventsList({ event }) {

  return (
    <section className="events__list">
      <p className="events__list-date">{event.when.date}</p>
      <div className="events__list-infoTop">
        <p className="events__list-name">{event.name}</p>
        <p className="events__list-where">{event.where}</p>
        <div className="events__list--infoBottom">
          <p className="events__list-time">{event.when.from} - {event.when.to}</p>
          <p className="events__list-price">{event.price} sek</p>
        </div>
      </div>
    </section>
  )
}

export default EventsList;