import { useState, useEffect } from 'react';
import './SearchInput.css';

function SearchInput({ eventList, userInput, setUserInput, setSearchResult }) {
	const [suggestions, setSuggestions] = useState([]);
	const [isSuggestionClicked, setIsSuggestionClicked] = useState(false);
	const [noResult, setNoResult] = useState(false);

	useEffect(() => {
		if (userInput === '') {
			setSuggestions([]);
			return;
		}

		if (Array.isArray(eventList)) {
			const filtered = eventList.filter((event) =>
				event.name.toLowerCase().includes(userInput.toLowerCase())
			);
			setSuggestions(filtered);
		}
	}, [userInput, eventList]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (suggestions.length > 0) {
			setSearchResult(suggestions);
		} else {
			setSearchResult([]);
			setNoResult(true);
		}

		setUserInput('');
		setSuggestions([]);
		setIsSuggestionClicked(false);
	};

	const handleChange = (e) => {
		setUserInput(e.target.value);
	};

	const handleClickSuggestion = (eventName) => {
		setUserInput(eventName);
		setSuggestions([]);
		setIsSuggestionClicked(true);
	};

	return (
		<form onSubmit={handleSubmit} className="searchform">
			<div className="searchform__cointainer">
				<input
					aria-label="search-input"
					type="text"
					className="searchform__input"
					placeholder="Search for event"
					onChange={handleChange}
					value={userInput}
				/>
				<button
					className="searchform__btn"
					aria-label="search-button"
					type="submit"
				>
					<i className="fa-solid fa-magnifying-glass"></i>
				</button>
			</div>
			{userInput && suggestions.length > 0 && !isSuggestionClicked && (
				<ul className="searchForm__suggestionlist">
					{suggestions.map((event) => (
						<li
							className="searchForm__suggestions"
							onClick={() => handleClickSuggestion(event.name)}
							key={event.id}
						>
							{event.name}
						</li>
					))}
				</ul>
			)}
		</form>
	);
}

export default SearchInput;
