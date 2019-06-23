import React from 'react'

const Buttons = () => {
    return (
        <div className="buttons">
            <a 
                className="button" 
                id="tweet-quote" 
                title="Tweet this quote!" 
                target="_blank"
                href="https://twitter.com">
                <i className="fab fa-twitter"></i>    
            </a>
            <a 
                className="button" 
                id="fb-quote" 
                title="Post this quote!" 
                target="_blank"
                href="https://facebook.com">
                <i className="fab fa-facebook-f"></i>    
            </a>
            <button className="button" id="new-quote">New quote</button>
        </div>
            )
}

export default Buttons