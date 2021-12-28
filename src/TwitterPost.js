import React from 'react'
import './styles/fontello.css'
import './styles/TwitterPost.css'

function TwitterPost(){
return(
    <div  id="tweet-quote" role="button">
        <i className="icon-twitter"></i>

        <div id='twitterIconWrapper'>
            <i className="icon-twitter-squared"></i>
        </div>

        <div id='tweetWrapper'>
            <div id="tweetText">TWEET THIS QUOTE!</div>
        </div>
    </div>
)
}

export default TwitterPost