import "./SingleOrders.css"
import Counter from "../Counter/Counter"
import  useCartStore  from "../../Store/UseCartStore"


function SingleOrders( { ticket }) {
  const { updateTicketQuantity } = useCartStore();

  return (
    <div className="ticket">
        <Counter 
            ticket={ticket}
            updateTicketQuantity={updateTicketQuantity}
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