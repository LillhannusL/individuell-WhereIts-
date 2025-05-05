import './Ticket.css';
import { v4 as uuidv4 } from 'uuid';
import { use, useMemo } from 'react';

function Ticket({ event }) {
	const ticketNumber = useMemo(() => {
		const generate = uuidv4();
		const toUpper = generate.toUpperCase();
		return toUpper.substring(0, 5);
	}, []);

	return (
		<li className="ticket">
			<p className="ticket__text">WHAT</p>
			<h2 className="ticket__name">{event.name}</h2>
			<p className="ticket__text">WHERE</p>
			<p className="ticket__where">{event.where}</p>
			<div className="ticket_when">
				<div className="ticket_when-border">
					<p className="ticket__text">WHEN</p>
					<p className="ticket__time">{event.when.date}</p>
				</div>
				<div className="ticket_when-border">
					<p className="ticket__text">FROM</p>
					<p className="ticket__time">{event.when.from}</p>
				</div>
				<div className="ticket_when-border">
					<p className="ticket__text">TO</p>
					<p className="ticket__time">{event.when.to}</p>
				</div>
			</div>
			<div className="ticket__seating">
				<p className="ticket__text">INFO</p>
				<p>section + seat</p>
			</div>
			<div className="ticket__code">
				<p className="ticket__barcode">{ticketNumber}</p>
				<p>#{ticketNumber}</p>
			</div>
		</li>
	);
}

export default Ticket;
