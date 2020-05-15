import React, { Component } from 'react';
import { connect } from 'react-redux';
import { drawCard, updateDeck, addUser, nextUserToDeal } from '../actions';
import UserCard from './UserCard';
import deck from '../resources/PNG/blue_back.png'
class Desk extends Component {

    constructor(props) {

        const users = [{ id: 2, firstName: 'Piyush', cards: [] }];
        super(props);
        this.props.updateDeck();
        users.push(this.props.loggedInUser)
        this.props.addUser(users);
    }

    drawOneCard = () => {

        if (this.props.users !== null && this.props.users[1].cards.length === 3) {
            return
        }
        var randomIndex = Math.floor(Math.random() * 52) + 1;
        var drawnCard = this.props.deck[randomIndex];
        while (drawnCard !== undefined && drawnCard.used) {
            randomIndex = Math.floor(Math.random() * 52) + 1;
            drawnCard = this.props.deck[randomIndex];
        }


        if (drawnCard === undefined) {
            return
        }
        drawnCard.used = true;
        this.props.drawCard(drawnCard);

        if (this.props.nextUser === undefined || this.props.nextUser === null || this.props.nextUser.id === 1) {
            this.props.nextUserToDeal(this.props.users[0]);
            this.props.users[0].cards.push(drawnCard)
        } else {
            this.props.nextUserToDeal(this.props.users[1]);
            this.props.users[1].cards.push(drawnCard)
        }



    }
    renderUserCard(card) {
        return this.props.users.map((user) => {
            return <div key={user.id}>
                <UserCard card={this.props.selectedCard} user={user} />
            </div>
        })

    }
    render() {
        return (
            <div className='ui content'>
                <div className='card ' style={{ textAlign: "center" }}>
                    <img style={{ maxHeight: 100 }} src={deck} onClick={this.drawOneCard}></img>
                    {/* <button className='ui button primary' > 
                    
                    Draw Card
                    
                    </button> */}
                </div>

                <div>
                    {this.renderUserCard(this.props.selectedCard)}
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        deck: state.deck,
        drawCard: state.drawCard,
        selectedCard: state.selectedCard,
        updateDeck: state.deck,
        card: state.selectedCard,
        users: state.users,
        nextUser: state.nextUser,
        loggedInUser: state.loggedInUser
    }

}
export default connect(mapStateToProps, { drawCard, updateDeck, addUser, nextUserToDeal })(Desk);