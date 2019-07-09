import { NEW_QUOTE, CHANGE_QUOTE } from "../constants/ActionTypes";

const initialState = {
    quotes: [
        {
            quote: `Don't cry because it's over, smile because it happened.`,
            author: "Dr. Seuss"
        },
        {
            quote: `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`,
            author: "Marilyn Monroe"
        },
        {
            quote: `Be yourself; everyone else is already taken.`,
            author: "Oscar Wilde"
        },
        {
            quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
            author: "Albert Einstein"
        },
        {
            quote: `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`,
            author: "Bernard M. Baruch"
        }
    ],
    index: getRandomIndex(this.index)
}

const getRandomIndex = (current_index) => {
    let new_index;
    do {
        new_index = Math.floor(Math.random() * initialState.quotes.length);
    } while (new_index !== current_index);
    return new_index;
}

export default function quoteReducers(state = initialState, action) {
    switch(action.type) {
        case CHANGE_QUOTE:
            return {
                index: getRandomIndex(),
                ...state
            }
        default:
            return state;
    }
}