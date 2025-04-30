import "./SingleOrders.css"
import Counter from "../Counter/Counter"

function SingleOrders( { ticket }) {
  return (
    <div className="ticket">
        <Counter 
            className="counter--cart"
            id={ticket.id} 
            text={
                <>
                    <h2>{ticket.name}</h2>
                    <h4>{ticket.when.date} kl {ticket.when.from} - {ticket.when.to}</h4>
                </>
            }
        />
    </div>
  )
}

export default SingleOrders