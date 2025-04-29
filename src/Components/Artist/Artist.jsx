import "./Artist.css"

function Artist({ event }) {
    return (
        <section className="artistevent">
            <h4>You are about to score some tickets to</h4>
            <div className="artistevent__info">
                <h2>{event.name}</h2>
                <p className="artistevent__when">{event.when.date}, {event.when.from} – {event.when.to}</p>
                <p className="artistevent__where">{event.where}</p>
            </div>
        </section>
    )
}

export default Artist