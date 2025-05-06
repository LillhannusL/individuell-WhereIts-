import { useState, useEffect } from 'react';
import './TicketsPage.css';
import Ticket from '../../Components/Ticket/Ticket';
import Nav from '../../Components/Nav/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { EffectCoverflow } from 'swiper/modules'

function TicketsPage() {
	const [boughtTickets, setBoughtTickets] = useState([]);

	useEffect(() => {
		const tickets = JSON.parse(localStorage.getItem('boughtTickets')) || [];
		const allTickets = prepareTickets(tickets);
		setBoughtTickets(allTickets);
	}, []);

	function prepareTickets(boughtTickets) {
		// skapar en biljett baserat på quantity, sen tar bort quantity
		const allTickets = boughtTickets.flatMap((event) =>
			Array.from({ length: event.quantity }, () => {
				const { quantity, ...rest } = event;
				return { ...rest };
			})
		);
		console.log(allTickets);
		// skapar en array baserat på id med ticket objekt i
		const groupById = {};
		allTickets.forEach((ticket) => {
			if (!groupById[ticket.id]) {
				groupById[ticket.id] = [];
			}
			groupById[ticket.id].push(ticket);
		});

		Object.keys(groupById).forEach((eventId) => {
			const tickets = groupById[eventId];
			const section = String.fromCharCode(65 + Math.floor(Math.random() * 6)); //random A-F
			let seatNumber = Math.floor(Math.random() * 100) + 1;

			tickets.forEach((ticket, index) => {
				ticket.section = section;
				ticket.seatNumber = seatNumber + index;
			});
		});

		console.log(groupById);
		return allTickets;
	}

	return (
		<section className="page tickespage">
			<Swiper
        // direction="vertical"
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
				coverflowEffect={{
          rotate: 30,
          stretch: 100,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className="ticket-swiper"
			>
				{boughtTickets.length > 0 ? (
					boughtTickets.map((ticket) => (
						<SwiperSlide key={ticket.seatNumber}>
							<Ticket ticket={ticket} />
						</SwiperSlide>
					))
				) : (
					<p className="noTickets">Inga köpta biljetter</p>
				)}
			</Swiper>
      <Nav />
		</section>
	);
}

export default TicketsPage;
