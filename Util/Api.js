import { AsyncStorage } from 'react-native'
const STORAGE_KEY = 'FLASHCARDS'

export const saveDeck = deck => {
  return AsyncStorage.mergeItem(STORAGE_KEY,JSON.stringify({ 
    [deck.id]: deck 
  }));
};
  
export const getDeckItem = () => {
  return AsyncStorage.getItem(STORAGE_KEY).then(result => {const data = JSON.parse(result);
    return data;
  });
};

export const saveCard = (deckId, card) => {
  return AsyncStorage.getItem(STORAGE_KEY).then(results => {const data = JSON.parse(results);
    data[deckId] = {
      ...data[deckId],
      cards: [
        ...data[deckId].cards,
        { question: card.question, answer: card.answer}
      ]
    };
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  });
};