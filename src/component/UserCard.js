import React from 'react';
import male from '../resources/male.jpg'
import female from '../resources/female.jpg';

import deck from '../resources/PNG/blue_back.png'
const UserCard = (props) => {
    if (props.card != null) {
        return (
            <div className='ui container grid' style={{ marginTop: '5%' }}>
                <div className='ui row user_card_row'>
                    <div className="ui one" >
                        <div className="column">
                            <div className=" card">
                                <div className="image">
                                    {renderUser(props.user.firstName)}
                                </div>
                                <div className="content">
                                    <label>{props.user.firstName}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {renderCard(props.user.cards)}

                </div>
            </div>
        )
    }
    return <div>

    </div>

}


const renderUser = (name) => {
    if (name === 'Mayura') {
        return <img alt='' src={female} style={{ maxWidth: '50px' }}></img>
    } else {
        return <img alt='' src={male} style={{ maxWidth: '50px' }}></img>
    }
}
const seeCards = (event) => {
    var hiddenCardElements = event.currentTarget.parentElement.parentElement.parentElement.getElementsByClassName('hidden_cards');
    var length = hiddenCardElements.length;
    for (var i = 0; i <= length; i++) {
        if (hiddenCardElements[0] !== undefined)
            hiddenCardElements[0].remove()
    }
}



const renderCard = (cards) => {

    return cards.map((card, index) => {
        return <div className='column wide' style={{ width: '2%' }} key={card.suit + '-' + card.rank}>
            <div className="ui raised " style={{ height: '125px', position: "relative" }}>
                <img style={{ height: '100%' }} alt='' src={card.image}></img>
                <img alt='' className='hidden_cards' id={card}
                    style={{ height: '100%', position: "absolute", top: '0%', left: '20%' }} src={deck}></img>
                {renderSeeButton(index)}
            </div>

        </div>
    })

}

const renderSeeButton = (index) => {
    console.log('call to show' + index)
    if (index === 2) {
        return <div onClick={seeCards}>see</div>
    }
}



export default UserCard;