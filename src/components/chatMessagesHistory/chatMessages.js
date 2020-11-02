import React, {Component} from 'react';

import './chatMessages.css';
import {connect} from "react-redux";
import jwt_decode from "jwt-decode";
import {Redirect} from "react-router-dom";

class chatMessages extends Component {
    componentDidMount() {
        
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        this.el.scrollIntoView({behavior: 'smooth'});
    }

    render() {


        const messages = this.props.messageReducer.messages;
        return (
            <div className={'chatBox__messages__history_box'}>
                {messages.map(this.messageRender, this)}
                <div ref={el => {
                    this.el = el;
                }}/>
            </div>
        )
    }

    messageRender({userSender, userRecipient, date, text, _id}) {
        const userObj = JSON.parse(localStorage.getItem('user'));
        const token = userObj.token;
        const {_id: senderId} = jwt_decode(token);

        const right = {
            justifyContent: 'flex-end'
        };


        return (

            <div key={_id} style={userSender.id === senderId ? right : null}
                 className={'chatMessages__messageBox'}>
                <div className={'chatMessages__message'}>
                    <p className={'chatMessages__msg'}>{text}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messageReducer: state.messageReducer
    }
};

export default connect(mapStateToProps, null)(chatMessages)