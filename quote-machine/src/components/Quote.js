import React, { Component } from 'react'
import './Quote.css'

const Quote = ({ quote, author }) => {
    <div id="quote-box">
        <div className="quote-text">
        "<span id="text">{quote}</span>"
        </div>
        <div class="quote-author">
            - 
            <span id="author">{author}</span>
        </div>
    </div>
}

export default Quote