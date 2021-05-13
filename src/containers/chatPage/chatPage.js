import React, {Component} from 'react';
import './chatPage.css';
import MediaQuery from 'react-responsive'

import {connect} from "react-redux";
import Chat from '../../components/chat'
import {interceptors} from "../../interceptors/auth.interceptor";
import {Redirect} from "react-router-dom";
import {deleteUserFromState} from "../../actions/users-actions";


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
        //Button for return to main page
        const backButton = () => {
            console.log('back')
            this.props.deleteRecipientId()
        }

        return (

            <div className={'generalBox'}>
                <MediaQuery minDeviceWidth={280} maxWidth={768}>
                    <div className={'generalBox__media'}>
                        <div className={'generalBox__media__header'}>
                            <div
                                className={this.props.userReducer.recipientUser ? 'generalBox__media__header__backImg' : 'displayNone'}>
                                <img src={process.env.PUBLIC_URL + '/replydark.png'} onClick={() => backButton()} alt=""/>
                            </div>
                        </div>
                        <Chat/></div>
                </MediaQuery>
                <MediaQuery minDeviceWidth={769}>
                    <header>
                        <div className={'ext_btn'} onClick={this.redirect}>Вихід</div>
                    </header>
                    <Chat/>
                </MediaQuery>


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
        deleteRecipientId: () => dispatch(deleteUserFromState()),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
