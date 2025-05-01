import "./EventsListItem.css"
import { shortenDate } from "../Utils/shortenDate";
import { Link } from "react-router-dom";

function EventsListItem({ event }) {

  return (
    <Link to={'/artist/' + event.id}>
      <section className="events__list">
        <p className="events__list-date">{shortenDate(event.when.date)}</p>
        <div className="events__list-infoTop">
          <h2 className="events__list-name">{event.name}</h2>
          <p className="events__list-where">{event.where}</p>
          <div className="events__list-infoBottom">
            <p className="events__list-time">{event.when.from} - {event.when.to}</p>
            <p className="events__list-price">{event.price} sek</p>
          </div>
          <hr />
        </div>
      </section>
    </Link>
  )
}

export default EventsListItem;