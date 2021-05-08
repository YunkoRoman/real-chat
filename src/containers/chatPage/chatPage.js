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

        return (

            <div className={'generalBox'}>
                <header>
                    <div className={'ext_btn'} onClick={this.redirect}>Вихід</div>
                </header>
                <Chat/>

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
