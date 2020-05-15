export const selectSong = (song) => {
    return {
        type: 'SELECT_SONG',
        payload: song
    }
}


export const drawCard = (card) => {
    return {
        type: 'DRAW_CARD',
        payload: card
    }
}

export const updateDeck = () => {
    return {
        type: 'DECK_INIT'
    }
}

export const addUser = (users) => { 
    return {
        type: 'ADD_USER',
        payload: users
    }
}

export const nextUserToDeal = (user) => { 
    return {
        type: 'USER_TO_DEAL',
        payload: user
    }
}

export const loginAction = (loggedInUser) => { 
    return {
        type: 'LOGIN',
        payload: loggedInUser
    }
}