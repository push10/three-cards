import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { loginAction } from '../actions'
class Login extends Component {

    handleChangeEmail = (event) => {
        var user = this.state.user;
        user.email = event.target.value
    }

    handleChangePassword = (event) => {
        var user = this.state.user;
        user.password = event.target.value
    }
    handleLoging = () => {
        this.props.loginAction(this.state.user);
    }
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: 1,
                firstName: '',
                email: '',
                password: '',
                cards: []
            }
        }
    }

    changeText(event) {
        var user = this.state.user;
        var firstName = event.target.value;
        user.firstName = firstName;
        this.setState({
            user: user
        });
    }
    render() {
        return (
            <div className='ui middle aligned center aligned grid'>
                <div className='column' style={{ maxWidth: '450px' }}>
                    <form className="ui large form" >
                        <div className='ui stacked segment'>
                            <div className="field">
                                <h2 className="ui image header orange">
                                    Play with Piyush!!!
                        </h2>
                            </div>

                            <div className="field ">
                                <div className="ui left icon input ">
                                    <i className="user icon orange"></i>
                                    <input type="text" name="firstName" value={this.state.user.firstName}
                                        onChange={this.changeText.bind(this)}
                                        placeholder="Your Name"></input>
                                </div>
                            </div>

                            <div className="field">
                                <div className="ui left icon input ">
                                    <i className="lock icon orange"></i>
                                    <input type="password" name="password" 
                                     onChange={this.changeText.bind(this)}
                                    value={this.state.user.password} placeholder="Password"></input>
                                </div>
                            </div>

                            <div className="ui large  submit button orange" onClick={this.handleLoging}>

                                <Link to="/desk" >
                                    <label style={{ color: 'white' }}>Play</label>
                                </Link>
                            </div>

                        </div>
                        <div className="ui error message"></div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedInUser: state.loggedInUser
    }
}

export default withRouter(connect(mapStateToProps, { loginAction })(Login));