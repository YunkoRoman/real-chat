import React, {Component} from 'react';

import './chatMessages.css';
import {connect} from "react-redux";
import jwt_decode from "jwt-decode";


class chatMessages extends Component {
    componentDidMount() {
        if (this.el) this.scrollToBottom();
    }

    componentDidUpdate() {
        if (this.el) this.scrollToBottom();
    }

    scrollToBottom() {
        if (this.el) this.el.scrollIntoView({behavior: 'smooth'});
    }


    render() {


        const messages = this.props.messageReducer.messages;
        return (
            <div className={'chatBox__messages__history_box'}>
                {this.props.userReducer.recipientUser ?
                    <div>{messages.map(this.messageRender, this)}
                        <div ref={el => {
                            this.el = el
                        }}/>
                    </div> :
                    <div className={'chatBox__messages__history_box__not_selected'}>
                        <p>Виберіть чат </p>
                    </div>}
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
                <div
                    className={userSender.id === senderId ? 'chatMessages__message_right' : 'chatMessages__message_left'}>
                    <p className={'chatMessages__msg'}>{text}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userReducer: state.userReducer,
        messageReducer: state.messageReducer
    }
};

export default connect(mapStateToProps, null)(chatMessages)