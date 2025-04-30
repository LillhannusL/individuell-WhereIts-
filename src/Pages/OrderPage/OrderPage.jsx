import './OrderPage.css';
import Navbar from '../../Components/Nav/Navbar';
import { useLocalStorageCart } from '../../Hooks/useLocalStorageCart';
import SingleOrders from '../../Components/SingleOrders/SingleOrders';
import Button from '../../Components/Button/Button';

function OrderPage() {
	const { tickets } = useLocalStorageCart();

	const totalPrice = tickets.reduce((sum, ticket) => {
		return sum + ticket.price * ticket.quantity;
	}, 0);

	return (
		<section className="page orderpage">
			<h1>Orders</h1>
			<section className="orderTicket">
				{tickets &&
					tickets.map((ticket) => {
						return <SingleOrders key={ticket.id} ticket={ticket} />;
					})}
			</section>
			<div className="orderpage__bottom">
				<p className="orderpage__totalText">Totalt värde på order</p>
				<h5 className="orderpage__totalPrice">{totalPrice} sek</h5>
				<Button text="Skicka order" />
			</div>
			<Navbar />
		</section>
	);
}

export default OrderPage;
