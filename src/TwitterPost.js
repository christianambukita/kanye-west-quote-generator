import './styles/fontello.css';
import './styles/TwitterPost.css';

function TwitterPost({ quote }) {
	const tweetURLbase = 'https://twitter.com/intent/tweet';
	let tweetParams = new URLSearchParams();
	tweetParams.set('text', `${quote}\n-Kanye West`);
	const tweetURL = `${tweetURLbase}?${tweetParams.toString()}`;

	return (
		<a
			id='tweet-quote'
			role='button'
			href={tweetURL}
			target='_blank'
			rel='noreferrer'>
			<i className='icon-twitter'></i>

			<div id='twitterIconWrapper'>
				<i className='icon-twitter-squared'></i>
			</div>

			<div id='tweetWrapper'>
				<div id='tweetText'>TWEET THIS QUOTE!</div>
			</div>
		</a>
	);
}

export default TwitterPost;
