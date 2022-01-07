import React from 'react';
import './styles/App.css';
import QuoteDisplay from './QuoteDisplay';
import TwitterPost from './TwitterPost';

function App() {
	const [quote, setQuote] = React.useState('');

	const handleClick = async () => {
		fetch('https://api.kanye.rest')
			.then((response) => response.json())
			.then((newQuote) => setQuote(newQuote.quote));
	};

	React.useEffect(() => handleClick(), []);

	return (
		<div className='quoteBox'>
			<QuoteDisplay quote={quote} />
			<TwitterPost />
			<button className='quoteButton' onClick={handleClick}>
				ANOTHER ONE
			</button>
		</div>
	);
}

export default App;
