import './OrderPage.css';
import Navbar from '../../Components/Nav/Navbar';
import { useEffect, useState } from 'react';
import SingleOrders from '../../Components/SingleOrders/SingleOrders';
import Button from '../../Components/Button/Button';
import useCartStore  from "../../Store/UseCartStore"

function OrderPage() {
	const { tickets, syncCountsandTickets, clearCart } = useCartStore();

	const totalPrice = tickets.reduce((sum, ticket) => {
		return sum + ticket.price * ticket.quantity;
	}, 0);

	useEffect(() => {
		syncCountsandTickets();
	}, []);

	const createTicket = () => {
		// kopiera från tickets till boughtTickets(ny i localstorage)
		localStorage.setItem('boughtTickets', JSON.stringify(tickets));
		// ta bort från tickets i LS
		clearCart()
		}

	return (
		<section className="page orderpage">
			<h1>Orders</h1>
			<section className="orderTicket">
				{tickets &&
					tickets.map((ticket) => {
						return <SingleOrders 
						key={ticket.id} 
						ticket={ticket} />;
					})}
			</section>
			<div className="orderpage__bottom">
				<p className="orderpage__totalText">Totalt värde på order</p>
				<h5 className="orderpage__totalPrice">{totalPrice} sek</h5>
				<Button onClick={createTicket} text="Skicka order" />
			</div>
			<Navbar />
		</section>
	);
}

export default OrderPage;
