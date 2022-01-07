import React from 'react';
import './styles/App.css';
import QuoteDisplay from './QuoteDisplay';
import TwitterPost from './TwitterPost';

function App() {
	const [quote, setQuote] = React.useState('');

	const getNewQuote = async () => {
		fetch('https://api.kanye.rest')
			.then((response) => response.json())
			.then((newQuote) => setQuote(newQuote.quote));
	};

	React.useEffect(() => getNewQuote(), []);

	return (
		<div className='quoteBox'>
			<QuoteDisplay quote={quote} />
			<TwitterPost quote={quote} />
			<button className='quoteButton' onClick={getNewQuote}>
				ANOTHER ONE
			</button>
		</div>
	);
}

export default App;
