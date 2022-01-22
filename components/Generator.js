import QuoteAndAuthor from "./QuoteAndAuthor";
import { Component } from "react/cjs/react.production.min";
import { quotes } from "./quotes";
import { motion } from "framer-motion";
import Footer from "./Footer";
class Generator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: quotes[0].quote,
            author: quotes[0].author
        };
    }

    getRandomQuote = (arr) => {
        let i = Math.floor(Math.random() * quotes.length)
        let randomQuote = quotes[i]
        this.setState({
            quote: randomQuote.quote,
            author: randomQuote.author
        });
        this.shuffle(quotes)
    };
    shuffle = (arr) => {
        return arr.sort(function () { return 0.5 - Math.random() });
    }

    render() {
        return (
            <div className="bk">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }} id="quote-box" >
                    <h1 className="title">Random Quotes Generator</h1>
                    <QuoteAndAuthor
                        getRandomQuote={this.getRandomQuote}
                        quote={this.state}
                    />
                </motion.div>
                <Footer />
            </div>
        )
    }
}

export default Generator;