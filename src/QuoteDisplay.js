import React from "react";
import "./styles/QuoteDisplay.css"

function QuoteDisplay({quote}){

    return(
        <div id="quoteContent">
            <p>{quote}</p>
            <p id='author'>- Kanye West</p>
        </div>
    )
}

export default QuoteDisplay;