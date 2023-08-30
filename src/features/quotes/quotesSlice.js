// Action Creators
// TODO: Create action creators as defined in tests
import {v4 as uuid } from "uuid";

export function addQuote(quote) {
  return {
    type: "quote/add",
    payload: quote
  }
}

export function removeQuote(id) {
  return {
    type: "quote/remove",
    payload: id
  }
}

export function upvoteQuote(id) {
  return {
    type: "quote/upvote",
    payload: id
  }
}

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  const {type, payload} = action
  switch (type) {
    case "quote/add": {
      return [...state, payload]
    }
    case "quote/remove": {
      return state.filter((quote) => quote.id !== payload)
    }
    case "quote/upvote": {
      state.map((quote) => {
        if (quote.id === payload) {
          return {
            ...quote,
            votes: quote.votes + 1
          } else {
            return quote
          }
        }
      })   
    }
    default:
      return state;
  }
}
