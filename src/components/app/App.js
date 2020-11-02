import React, {Component} from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

import './App.css';
import ChatPage from '../../containers/chatPage'
import Registration from '../../containers/registrationPage'
import SingIn from '../../containers/SingInPage'
import GuardedRoute from '../../utils/guardedRoute';
import {interceptors} from "../../interceptors/auth.interceptor";
import {connect} from "react-redux";
import {sendDataForCheck} from "../../actions/checkUser-actions";
import {logout} from "../../actions/auth-actions";


class App extends Component {


    render() {
        const user = localStorage.getItem('user');

        if (user !== null) {
            const userObj = JSON.parse(localStorage.getItem('user'));
            interceptors(userObj.token);

        }
        return (
            <Switch>
                <GuardedRoute path={'/'} component={ChatPage} exact={true}/>
                <Route path={'/registration'}>
                    <Registration/>
                </Route>
                <Route path={'/SingIn'}>
                    <SingIn/>
                </Route>
            </Switch>
        )
    }

}

const mapStateToProps = (state) => {

    return {
        userCheck: state.userCheck
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkUser: () => dispatch(sendDataForCheck()),
        logout: () => dispatch(logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

