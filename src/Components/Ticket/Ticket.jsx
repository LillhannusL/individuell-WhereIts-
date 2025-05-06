import './Ticket.css';
import { v4 as uuidv4 } from 'uuid';
import { use, useMemo } from 'react';
import {shortenDate} from "../Utils/shortenDate"

function Ticket({ ticket }) {
	const ticketNumber = useMemo(() => {
		const generate = uuidv4();
		const toUpper = generate.toUpperCase();
		return toUpper.substring(0, 5);
	}, []);

	

	return (
		<li className="boughtTicket">
			<p className="boughtTicket__text">WHAT</p>
			<h2 className="boughtTicket__name">{ticket.name}</h2>
			<p className="boughtTicket__text">WHERE</p>
			<p className="boughtTicket__where">{ticket.where}</p>
			<div className="boughtTicket_when">
				<div className="boughtTicket_when-border">
					<p className="boughtTicket__text">WHEN</p>
					<p className="boughtTicket__time">{shortenDate(ticket.when.date)}</p>
				</div>
				<div className="boughtTicket_when-border">
					<p className="boughtTicket__text">FROM</p>
					<p className="boughtTicket__time">{ticket.when.from}</p>
				</div>
				<div className="boughtTicket_when-border">
					<p className="boughtTicket__text">TO</p>
					<p className="boughtTicket__time">{ticket.when.to}</p>
				</div>
			</div>
			<div className="boughtTicket__seating">
				<p className="boughtTicket__text">INFO</p>
				<p className="boughtTicket__info">Section {ticket.section} - seat {ticket.seatNumber} </p>
			</div>
			<div className="boughtTicket__code">
				<p className="boughtTicket__barcode">{ticketNumber}</p>
				<p>#{ticketNumber}</p>
			</div>
		</li>
	);
}

export default Ticket;
