import { combineReducers } from 'redux';
import Card from '../models/Cards'; 
const songListReducers = () => {
    return [
        { 'title': 'Tujhe dekha to ye jana....', 'duration': 3.55 },
        { 'title': 'Kuch kuch hota hei....', 'duration': 5.05 },
        { 'title': 'Balam pichkari....', 'duration': 5.32 },
        { 'title': 'Ye mere watan ke logo....', 'duration': 5.5 },
        { 'title': 'Ye lal rang....', 'duration': 3.45 },
        { 'title': 'Didi tera dewar diwana....', 'duration': 2.55 },
        { 'title': 'Ankhiye se goli mare....', 'duration': 3.00 }

    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SELECT_SONG') {
        return action.payload;
    }
    return selectedSong;

}

var deck = [];
const makeDeckReducer = (initialState = null, action) => {
    var allRank = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    var allSuit = ['spade', 'diamond', 'heart', 'club'];
    if (action.type === 'DECK_INIT') {
        deck = [];

        for (const suit in allSuit) {
            for (const rank in allRank) {
                deck.push(new Card(allRank[rank], allSuit[suit], deck.length));
            }
        }

    }
    return deck;

}

const drawCardReducer = (selectedCard = null, action) => {
    if (action.type === 'DRAW_CARD') {
        markCardAsUsed(action.payload)
        return action.payload;
    }
    return selectedCard;
}

const nextUserToDealReducer = (user = null, action) => {
    if (action.type === 'USER_TO_DEAL') {
        return action.payload;
    }
    return user;
}

const markCardAsUsed = (card) => {
    deck[card.index] = card;
}

const addUserReducer = (users = [], action) => {
    if (action.type === 'ADD_USER') {

        users = action.payload;
    }
    return users;
}

const loginHandleReducer = (loggedInUser = null, action) => {
    
    if (action.type === 'LOGIN') {
        loggedInUser = action.payload
    }
    return loggedInUser;
}
export default combineReducers({
    songList: songListReducers,
    selectedSong: selectedSongReducer,
    deck: makeDeckReducer,
    selectedCard: drawCardReducer,
    users: addUserReducer,
    nextUser: nextUserToDealReducer,
    loggedInUser: loginHandleReducer
})