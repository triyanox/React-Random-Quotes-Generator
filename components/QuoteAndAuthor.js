import { quotes } from "./quotes";
import { motion } from "framer-motion";
const QuoteAndAuthor = (props) => {

    const { quote, getRandomQuote } = props;
    return (

        <div>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }} className="card">
                <p id="text" className="quote">{quote.quote}</p>
                <h2 id="author" className="author">- {quote.author}</h2>
            </motion.div>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }} className="button-warp">
                <button id="new-quote" className="button"
                    onClick={() => { getRandomQuote(quotes) }}
                    type="submit">
                    New Quote</button>
                <button id="tweet-quote" className="button tweet"
                    onClick={() => {
                        getRandomQuote(quotes);
                        window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=ac__haq&text=' + encodeURIComponent(quote.quote + '--' + quote.author))
                    }}
                    type="submit"> Tweet Quote</button>
            </motion.div>
        </div>

    )
}

export default QuoteAndAuthor;