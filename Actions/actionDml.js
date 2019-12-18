export const GET_DECKS= 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function getDecks(decks) {
  return {
    type: GET_DECKS,
    decks
  };
}

export function addDeck(id, name) {
  return {
    type: ADD_DECK,
    id,  
    name
  };
}

export function addCard(deckId, question, answer) {
  return {
    type: ADD_CARD,
    deckId,
    question,
    answer
    
  };
}