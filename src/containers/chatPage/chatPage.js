import React, {Component} from 'react';
import './chatPage.css';

import {connect} from "react-redux";
import Chat from '../../components/chat'
import UserList from '../../components/userList';
import {interceptors} from "../../interceptors/auth.interceptor";
import {Redirect} from "react-router-dom";


class ChatPage extends Component {
    constructor(props) {
        super(props);
        this.state = {redirect: false}
    }

    componentDidMount() {
        const user = localStorage.getItem('user');

        if (user !== null) {
            const userObj = JSON.parse(localStorage.getItem('user'));
            interceptors(userObj.token);

        }
    }
    redirect = () => {
        this.setState({redirect: true})
    };


    render() {
        if (this.state.redirect) {
            return <Redirect
                from={'/'}
                to={'/SingIn'}/>
        }
        const recipientUser = this.props.userReducer.recipientUser;
        return (

            <div className={'generalBox'}>
                <header>
                    <div className={'ext_btn'} onClick={this.redirect}>Вихід</div>
                </header>
                {recipientUser === undefined ?
                    <div>
                        <h1 className={''}> Оберіть співрозмоника </h1>
                        <UserList/>
                    </div> : <Chat/>}
            </div>
        )


    }
}

const mapStateToProps = (state) => {

    return {
        userReducer: state.userReducer
    }
};


export default connect(mapStateToProps, null)(ChatPage);
