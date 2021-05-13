import React, {Component} from 'react';
import jwt_decode from "jwt-decode";
import './userList.css';

import {connect} from "react-redux";
import {fetchForList, saveUserToState} from "../../actions/users-actions";

import {getMessages} from "../../actions/messages-actions";
import {sendDataForCheck} from "../../actions/checkUser-actions";
import {logout} from "../../actions/auth-actions";
import {Redirect} from "react-router-dom";


class userList extends Component {
    constructor(props) {
        super(props);
        this.state = {redirect: false}
    }

    componentDidMount() {
        // this.props.checkUser();
        const userObj = JSON.parse(localStorage.getItem('user'));
        if (userObj) {
            const token = userObj.token;
            const {_id} = jwt_decode(token);

            if (_id !== null) this.props.getUsersList(_id, token)
        }

    }


    render() {

        if (this.props.userReducer.errorStatus === 500) {

            return <Redirect
                from={'/'}
                to={'/SingIn'}/>

        }
        const {list} = this.props.userReducer;
        if (list) {
            const {data} = list;
            const {usersList} = data;
            return (
                <div className={'userListBox'}>
                    <div className={'userListBox__head'}>

                    </div>
                    <div className={'userListBox__list'}>
                        {usersList.map(this.usersRender, this)}
                    </div>
                </div>
            )
        }


        return (
            <div>

            </div>
        )
    }

    usersRender({_id, name, surname}) {

        const getMsg = (_id, name) => {
            const userObj = JSON.parse(localStorage.getItem('user'));
            if (userObj) {
                const token = userObj.token;
                this.props.saveRecipientId(_id, name);
                this.props.getMessages(_id, token)
            }

        };
        return (
            <div key={_id} className={'userListBox__list__users'} onClick={() => getMsg(_id, name)}>
                <div className={'userListBox__list__userLogo'}>

                </div>
                <p className={'userName text'}> {name} </p>
                <p className={'userSurname text'}> {surname} </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        userReducer: state.userReducer,
        userCheck: state.userCheck
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUsersList: (_id, token) => dispatch(fetchForList(_id, token)),
        saveRecipientId: (_id, name) => dispatch(saveUserToState(_id, name)),
        getMessages: (userRecipientId, token) => dispatch(getMessages(userRecipientId, token)),
        checkUser: () => dispatch(sendDataForCheck()),
        logout: () => dispatch(logout())

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(userList);