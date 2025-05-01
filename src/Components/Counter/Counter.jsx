import useCartStore from '../../Store/UseCartStore';
import { useState } from 'react';
import './Counter.css';

function Counter({
	text,
	price,
	id,
	className = '',
	ticket,
	updateTicketQuantity,
}) {
	const { counts, plus, minus, setCount } = useCartStore();
	const count = counts[id] || 0;
	const totprice = count * price;

	const quantityChange = (newQuantity) => {
		if (newQuantity < 0) return;
		if (updateTicketQuantity) {
			updateTicketQuantity(ticket.id, newQuantity);
			setCount(ticket.id, newQuantity);
		}
	};

	return (
		<div className={`${className}`}>
			<div className="counter__top">
				{text ? <section>{text}</section> : <h5>{totprice} SEK</h5>}
			</div>
			<div className="counter__bottom">
				<button
					className="counter__btn"
					onClick={() =>
						updateTicketQuantity ? quantityChange(count - 1) : minus(id)
					}
				>
					-
				</button>
				<p className="counter__number">{count}</p>
				<button
					className="counter__btn"
					onClick={() =>
						updateTicketQuantity ? quantityChange(count + 1) : plus(id)
					}
				>
					+
				</button>
			</div>
		</div>
	);
}

export default Counter;
