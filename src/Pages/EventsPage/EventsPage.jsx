import './EventsPage.css';
import EventsListItem from '../../Components/EventListItem/EventsListItem';
import { useFetch } from '../../Hooks/useFetch';
import Navbar from '../../Components/Nav/Navbar';
import Button from '../../Components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from "react"
import SearchInput from '../../Components/SearchInput/SearchInput';

function EventsPage() {
	const { eventList, isLoading, isError } = useFetch();
 	const navigate = useNavigate()
	const [userInput, setUserInput] = useState('')
	const [searchResult, setSearchResult] = useState([])

	if (isLoading)
		return (
			<section className="page">
				<p>Loading events...</p>
			</section>
		);
	if (isError)
		return (
			<section className="page">
				<p>Error!</p>
			</section>
		);


    const handleClick = () => {
      navigate('/order')
    }


	return (
		<section className="page eventspage">
			<h1>Events</h1>
			<SearchInput 
			eventList={eventList}
			setUserInput={setUserInput}
			userInput={userInput}
			setSearchResult={setSearchResult}
			searchResult={searchResult}
			/>
			<section className="eventspage__list">
				{(searchResult.length > 0 ? searchResult : eventList).map((event) => {
					return <EventsListItem key={event.id} event={event} />;
				})}
			</section>
			<Button onClick={handleClick} text="Till Varukorgen" />
			<Navbar />
		</section>
	);
}

export default EventsPage;
