import React, { Component } from 'react';

export default class Presentational extends Component {
    constructor(props) {
        super(props);
        this.handleChangQuote = this.handleChangQuote.bind(this);
    }

    handleChangQuote = () => {
        this.props.actions.changeQuote();
        
    }

    render() {
        const { list } = this.props;
        // console.log(this.props.list.index)
        return(
            <div>
                <p>{list.quotes[list.index].quote}</p>
                <p>{list.quotes[list.index].author}</p>
                <button onClick={this.handleChangQuote}>change</button> 
                <button>share</button>
            </div>
        )
    }
}