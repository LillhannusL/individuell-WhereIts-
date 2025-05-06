import "./Artist.css"

function Artist({ event }) {
    return (
        <section className="artistevent">
            <div className="artistevent__info">
                <h2>{event.name}</h2>
                <p className="artistevent__when">{event.when.date}, {event.when.from} – {event.when.to}</p>
                <p className="artistevent__where">{event.where}</p>
            </div>
        </section>
    )
}

export default Artist