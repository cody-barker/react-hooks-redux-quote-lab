// Action Creators
// TODO: Create action creators as defined in tests
import {v4 as uuid } from "uuid";

export function addQuote(quote) {
  return {
    type: "quote/add",
    payload: quote
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
    default:
      return state;
  }
}
