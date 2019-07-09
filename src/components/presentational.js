import { Component } from 'react';

export default class Presentational extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <p>quote</p>
                <p>author</p>
                <button>change</button>
                <button>share</button>
            </div>
        )
    }
}