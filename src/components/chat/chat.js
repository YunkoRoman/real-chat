import React, {Component} from 'react';
import {connect} from 'react-redux';
import socketIOClient from "socket.io-client";
import jwt_decode from "jwt-decode";


import {backUrl} from '../../constants/apiUrl'
import ChatMessages from '../../components/chatMessagesHistory'
import UserList from '../../components/userList';
import {sendMessage, saveNewPrivateMsg} from '../../actions/messages-actions'
import './chat.css';

let socket;


class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.keyPressedEnter = this.keyPressedEnter.bind(this);

    }

    componentDidMount() {


        const userObj = JSON.parse(localStorage.getItem('user'));
        if (userObj) {
            const token = userObj.token;
            const {_id, name: senderName} = jwt_decode(token);
            const {id, name} = this.props.userReducer.recipientUser;
            socket = socketIOClient.connect(backUrl);
            socket.emit('userId', {userId: _id});
            socket.on('privateMsg', data => {
                this.props.saveNewPrivateMsg(_id, senderName, data, id, name,)
            });

        }
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const userObj = JSON.parse(localStorage.getItem('user'));
        if (userObj) {
            const token = userObj.token;
            const {_id, name: senderName} = jwt_decode(token);
            const {id, name} = this.props.userReducer.recipientUser;
            this.props.sendMsg(socket, id, name, this.state.value, _id, senderName);
            this.setState({value: ''})
        }

    }

    keyPressedEnter(event) {
        if (event.key === "Enter") {
            this.handleSubmit(event)

        }
    }


    render() {

        return (
            <div className={'chatBox'}>
                <div className={'chatBox__messages'}>
                    <div className={'chatBox__messages__history'}>
                        <ChatMessages/>
                    </div>
                    <div className={'chatBox__messages__typeMess'}>
                        <form className={'chatBox__messages__typeMess__form'} onSubmit={this.handleSubmit}
                              onKeyPress={this.keyPressedEnter}>
                            <textarea placeholder={'Ваше повідомлення'} className={'customInput'}
                                      value={this.state.value} onChange={this.handleChange}/>
                            <input type='image' src={process.env.PUBLIC_URL + '/sendBtn.png'} alt={'Image'}
                                   className={'inpImg'}/>
                        </form>
                    </div>
                </div>
                <div className={'chatBox__UserList'}>
                    <UserList/>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        userReducer: state.userReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMsg: (socket, userRecipientId, userRecipientName, msg, senderId, senderName) =>
            dispatch(sendMessage(socket, userRecipientId, userRecipientName, msg, senderId, senderName)),
        saveNewPrivateMsg: (userRecipientId, userRecipientName, msg, senderId, senderName) =>
            dispatch(saveNewPrivateMsg(userRecipientId, userRecipientName, msg, senderId, senderName))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat)